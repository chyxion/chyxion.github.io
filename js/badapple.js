$(function() {
    var BadApple = {
        is_running: false,
        init: function() {
            var me = this,
                stage = $('#stage'),
                i;

            me.data_matrix = [];
            for (i = 0; i < me.frame_row; ++i) {
                me.data_matrix[i] = Array(me.frame_col).join(' ').split('');
            }

            me.canvas = stage.get(0);
            me.ctx = me.canvas.getContext('2d');
            me.canvas.width = me.frame_col * 7;
            me.canvas.height = me.frame_row * 16;

            me.ctx.fillStyle = 'rgba(0, 0, 0, .05)';
            me.ctx.fillRect(0, 0, me.canvas.width, me.canvas.height);
            me.ctx.fillStyle = '#7E7E7E';
            me.ctx.font = '12px Microsft YaHei';
        },
        load_data: function (fn) {
            var me = this;
            $.get('data/badapple', function (data) {
                me.data = data.split('\n');
                var rc = me.data[0].split(' ');
                me.frame_row = parseInt(rc[0]);
                me.frame_col = parseInt(rc[1]);
                fn && fn();
            });
        },
        draw_frame: function(data) {
            var me = this, i;
            for (i = 0; i < data.length; ++i) {
                me.data_matrix[data[i][0] - 1][data[i][1] - 1] = data[i][2];
            }
            me.ctx.clearRect(0, 0, me.canvas.width, me.canvas.height);
            for (i = 0; i < me.frame_row; ++i) {
                me.ctx.fillText(me.data_matrix[i].join(''), 4, i * 14 + 16);
            }
        },
        play: function() {
            var me = this,
                i = 0,
                j,
                l,
                r;
            me.is_running = true;
            me.interval || (me.interval = setInterval(function () {
                if (me.is_running && i < me.data.length) {
                    l = me.data[++i];
                    r = [];
                    if (l && !/^\s*$/.test(l)) {
                        l = l.split('|');
                        for (j = 0; j < l.length; ++j) {
                            r[j] = l[j].split('_');
                        }
                    }
                    me.draw_frame(r);
                }
            }, 70));
        },
        start: function() {
            var me = this;
            if (me.data) {
                me.play();
            }
            else {
                me.load_data(function() {
                    me.init();
                    me.play();
                });
            }
        },
        stop: function() {
            this.is_running = false;
        },
        terminal: function () {
            this.stop();
            clearInterval(this.interval);
        }
    };

    $('#stage').click(function() {
        BadApple.is_running ? 
            BadApple.stop() : 
            BadApple.start();
    }).click();
});
