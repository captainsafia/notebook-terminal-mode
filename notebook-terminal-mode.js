define(['base/js/namespace', 'jquery'], function(Jupyter, $) {
    function enable_terminal_mode() {
        TERMINAL_MODE_ENABLED = true;
        terminal_mode();
    }

    function disable_terminal_mode() {
        TERMINAL_MODE_ENABLED = false;
        terminal_mode();
    }

    function terminal_mode() {
        if (TERMINAL_MODE_ENABLED) {
        }
    }

    function place_terminal_mode_button() {
        if (!Jupyter.toolbar) {
            $([Jupyter.events]).on("app_initialized.NotebookApp", place_terminal_mode_button);
            return;
        }

        if ($(".terminal-mode").length == 0) {
            Jupyter.toolbar.add_buttons_group([
                {
                    'label': 'Enable Terminal Mode',
                    'icon': 'fa-terminal',
                    'callback': enable_terminal_mode,
                    'id': 'enable-terminal-mode',
                    'class': 'terminal-mode'
                },
                {
                    'label': 'Disable Terminal Mode',
                    'icon': 'fa-terminal',
                    'callback': disable_terminal_mode,
                    'id': 'disable-terminal-mode',
                    'class': 'terminal-mode'
                }
            ]);

            $("#enable-terminal-mode").css("background-color", "#87D37C");
            $("#enable-terminal-mode").css("border-color", "#87D37C");
            $("#enable-terminal-mode").css("color", "white"); 

            $("#disable-terminal-mode").css("background-color", "#EC644B");
            $("#disable-terminal-mode").css("border-color", "#EC644B");
            $("#disable-terminal-mode").css("color", "white"); 
        }
    }

    function load_ipython_extension() {
        console.log('Loading terminal-mode extension...');
        place_terminal_mode_button();
    }

    return {
        load_ipython_extension: load_ipython_extension
    };
});
