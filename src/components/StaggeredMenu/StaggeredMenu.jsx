import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './StaggeredMenu.css';

const StaggeredMenu = ({
    onNavigate = () => { },
    logoUrl = '/staff_code.png'
}) => {
    const [open, setOpen] = useState(false);
    const openRef = useRef(false);
    const panelRef = useRef(null);
    const preLayersRef = useRef(null);
    const preLayerElsRef = useRef([]);
    const iconRef = useRef(null);
    const toggleBtnRef = useRef(null);
    const busyRef = useRef(false);

    const openTlRef = useRef(null);
    const closeTweenRef = useRef(null);
    const spinTweenRef = useRef(null);

    const navItems = [
        { label: 'Home', ariaLabel: 'Go to Home section', link: '#home' },
        { label: 'Timeline', ariaLabel: 'Go to Timeline section', link: '#timeline' },
        { label: 'Tracks', ariaLabel: 'Go to Tracks section', link: '#tracks' },
        { label: 'Sponsors', ariaLabel: 'Go to Sponsors section', link: '#sponsors' },
        { label: 'Contact', ariaLabel: 'Go to Contact section', link: '#contact' },
    ];

    const socialItems = [
        { label: 'Instagram', link: 'https://www.instagram.com/techstasy__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    ];

    const colors = ['#2d7a7b', '#3a8a8b', '#4ea8a9'];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const panel = panelRef.current;
            const preContainer = preLayersRef.current;
            const icon = iconRef.current;
            if (!panel || !icon) return;

            let preLayers = [];
            if (preContainer) {
                preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer'));
            }
            preLayerElsRef.current = preLayers;

            gsap.set([panel, ...preLayers], { xPercent: 100 });
            gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
        });
        return () => ctx.revert();
    }, []);

    const buildOpenTimeline = useCallback(() => {
        const panel = panelRef.current;
        const layers = preLayerElsRef.current;
        if (!panel) return null;

        openTlRef.current?.kill();
        closeTweenRef.current?.kill();

        const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
        const socialTitle = panel.querySelector('.sm-socials-title');
        const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));

        const layerStates = layers.map(el => ({ el, start: Number(gsap.getProperty(el, 'xPercent')) }));
        const panelStart = Number(gsap.getProperty(panel, 'xPercent'));

        if (itemEls.length) {
            gsap.set(itemEls, { yPercent: 140, rotate: 10 });
        }
        if (socialTitle) {
            gsap.set(socialTitle, { opacity: 0 });
        }
        if (socialLinks.length) {
            gsap.set(socialLinks, { y: 25, opacity: 0 });
        }

        const tl = gsap.timeline({ paused: true });

        layerStates.forEach((ls, i) => {
            tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07);
        });

        const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
        const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
        const panelDuration = 0.65;

        tl.fromTo(
            panel,
            { xPercent: panelStart },
            { xPercent: 0, duration: panelDuration, ease: 'power4.out' },
            panelInsertTime
        );

        if (itemEls.length) {
            const itemsStart = panelInsertTime + panelDuration * 0.15;
            tl.to(
                itemEls,
                {
                    yPercent: 0,
                    rotate: 0,
                    duration: 1,
                    ease: 'power4.out',
                    stagger: { each: 0.1, from: 'start' }
                },
                itemsStart
            );
        }

        if (socialTitle || socialLinks.length) {
            const socialsStart = panelInsertTime + panelDuration * 0.4;
            if (socialTitle) {
                tl.to(socialTitle, { opacity: 1, duration: 0.5, ease: 'power2.out' }, socialsStart);
            }
            if (socialLinks.length) {
                tl.to(
                    socialLinks,
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.55,
                        ease: 'power3.out',
                        stagger: { each: 0.08, from: 'start' }
                    },
                    socialsStart + 0.04
                );
            }
        }

        openTlRef.current = tl;
        return tl;
    }, []);

    const playOpen = useCallback(() => {
        if (busyRef.current) return;
        busyRef.current = true;
        const tl = buildOpenTimeline();
        if (tl) {
            tl.eventCallback('onComplete', () => {
                busyRef.current = false;
            });
            tl.play(0);
        } else {
            busyRef.current = false;
        }
    }, [buildOpenTimeline]);

    const playClose = useCallback(() => {
        openTlRef.current?.kill();
        openTlRef.current = null;

        const panel = panelRef.current;
        const layers = preLayerElsRef.current;
        if (!panel) return;

        const all = [...layers, panel];
        closeTweenRef.current?.kill();

        closeTweenRef.current = gsap.to(all, {
            xPercent: 100,
            duration: 0.32,
            ease: 'power3.in',
            overwrite: 'auto',
            onComplete: () => {
                const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
                if (itemEls.length) {
                    gsap.set(itemEls, { yPercent: 140, rotate: 10 });
                }
                const socialTitle = panel.querySelector('.sm-socials-title');
                const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));
                if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
                if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });
                busyRef.current = false;
            }
        });
    }, []);

    const animateIcon = useCallback((opening) => {
        const icon = iconRef.current;
        if (!icon) return;
        spinTweenRef.current?.kill();
        if (opening) {
            spinTweenRef.current = gsap.to(icon, { rotate: 225, duration: 0.8, ease: 'power4.out', overwrite: 'auto' });
        } else {
            spinTweenRef.current = gsap.to(icon, { rotate: 0, duration: 0.35, ease: 'power3.inOut', overwrite: 'auto' });
        }
    }, []);

    const toggleMenu = useCallback(() => {
        const target = !openRef.current;
        openRef.current = target;
        setOpen(target);
        if (target) {
            playOpen();
        } else {
            playClose();
        }
        animateIcon(target);
    }, [playOpen, playClose, animateIcon]);

    const closeMenu = useCallback(() => {
        if (openRef.current) {
            openRef.current = false;
            setOpen(false);
            playClose();
            animateIcon(false);
        }
    }, [playClose, animateIcon]);

    const handleNavClick = (e, link) => {
        e.preventDefault();
        closeMenu();
        const element = document.querySelector(link);
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' });
            }, 350);
        }
        onNavigate(link);
    };

    React.useEffect(() => {
        if (!open) return;

        const handleClickOutside = (event) => {
            if (
                panelRef.current &&
                !panelRef.current.contains(event.target) &&
                toggleBtnRef.current &&
                !toggleBtnRef.current.contains(event.target)
            ) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open, closeMenu]);

    return (
        <div
            className={'staggered-menu-wrapper fixed-wrapper md:hidden'}
            data-position="right"
            data-open={open || undefined}
        >
            <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
                {colors.map((c, i) => (
                    <div key={i} className="sm-prelayer" style={{ background: c }} />
                ))}
            </div>

            <header className="staggered-menu-header" aria-label="Mobile navigation header">
                <button
                    ref={toggleBtnRef}
                    className="sm-toggle"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    aria-controls="staggered-menu-panel"
                    onClick={toggleMenu}
                    type="button"
                >
                    <span ref={iconRef} className="sm-icon" aria-hidden="true">
                        <span className="sm-icon-line" />
                        <span className="sm-icon-line sm-icon-line-v" />
                    </span>
                </button>
            </header>

            <aside id="staggered-menu-panel" ref={panelRef} className="staggered-menu-panel" aria-hidden={!open}>
                <div className="sm-panel-inner">
                    <ul className="sm-panel-list" role="list">
                        {navItems.map((it, idx) => (
                            <li className="sm-panel-itemWrap" key={it.label + idx}>
                                <a
                                    className="sm-panel-item"
                                    href={it.link}
                                    aria-label={it.ariaLabel}
                                    onClick={(e) => handleNavClick(e, it.link)}
                                >
                                    <span className="sm-panel-itemLabel">{it.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="sm-socials" aria-label="Social links">
                        <h3 className="sm-socials-title">Socials</h3>
                        <ul className="sm-socials-list" role="list">
                            {socialItems.map((s, i) => (
                                <li key={s.label + i} className="sm-socials-item">
                                    <a href={s.link} target="_blank" rel="noopener noreferrer" className="sm-socials-link">
                                        {s.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default StaggeredMenu;
