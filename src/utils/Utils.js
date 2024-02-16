import { useEffect } from 'react';
import $ from 'jquery';

const Utils = () => {
    useEffect(() => {
        // Window resize event
        const handleResize = () => {
            const width = $(window).width();
            if (width > 767 && $(window).width() < 767) {
                window.location.reload();
            } else if (width < 767 && $(window).width() > 767) {
                window.location.reload();
            }
        };
        $(window).resize(handleResize);

        // Menu Dropdown Toggle
        const handleMenuToggle = () => {
            $('.menu-trigger').toggleClass('active');
            $('.header-area .nav').slideToggle(200);
        };
        $('.menu-trigger').on('click', handleMenuToggle);

        // Clean up event listeners when component unmounts
        return () => {
            $(window).off('resize', handleResize);
            $('.menu-trigger').off('click', handleMenuToggle);
        };
    }, []);

    return null; // Utils 컴포넌트는 실제로 DOM에 렌더링되는 것이 아니므로 null을 반환합니다.
};

export default Utils;
