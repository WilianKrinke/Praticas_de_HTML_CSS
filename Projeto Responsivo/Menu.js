// Como Fazer Menu Hamburguer;

function Menu(config) {
    this.nav = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container;
    this.btn = (typeof config.toggleBtn === 'string') ? document.querySelector(config.toggleBtn) : config.toggleBtn;

    this.maxWidth = config.widthEnable || false;

    var _opened = false;
    var _this = this;

    this.btn.removeAttribute('style');

    if (this.maxWidth) {
        window.addEventListener('resize', e => {
            if (window.innerWidth > _this.maxWidth) {
                _this.nav.removeAttribute('style');
                _opened = true;
            } else if (!this.nav.getAttribute('style')) {
                CloseMenu();
            };
        });

        if (window.innerWidth <= _this.maxWidth) {
            CloseMenu()
        };
    };

    this.btn.addEventListener('click', OpenOrClose);

    function OpenOrClose() {
        if (!_opened) {
            OpenMenu();
        } else {
            CloseMenu();
        };
    };


    function OpenMenu() {
        var _top = _this.nav.getBoundingClientRect().top + 'px'
        var _style = {
            maxHeight: 'calc(100vh - ' + _top + ')',
            overflow: 'hidden'
        };
        applyStyleToNav(_style);
        _opened = true;
    }

    function CloseMenu() {
        var _style = {
            maxHeight: '0px',
            overflow: 'hidden'
        };
        applyStyleToNav(_style);
        _opened = false;
    }

    function applyStyleToNav(_style) {
        Object.keys(_style).forEach(stl => {
            _this.nav.style[stl] = _style[stl];
        });
    };
};