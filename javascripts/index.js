$(function () {
    $('#main_content').headsmart()
    // trigger matrix
    $('#matrix_trigger').click(function () {
        $('body').append([
            '<div style="position: absolute;',
                'z-index: 1024;',
                'left: 0;',
                'top:0;',
                '">',
            '<canvas id="stage">',
            '</canvas>',
            '</div>'].join(''));

        var d = $(document),
            stage = $('#stage'),
            q = stage.get(0),
            width = d.width(),
            height = d.height() - $('h1').height() - 6,
            yPositions = Array(300).join(0).split(''),
            ctx = q.getContext('2d');

        q.width = width;
        q.height = height;
         
        var draw = function () {
            ctx.fillStyle = 'rgba(0, 0, 0, .05)';
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = '#0F0';
            ctx.font = '10pt Georgia';
            yPositions.map(function(y, index) {
                var text = String.fromCharCode(1e2 + Math.random() * 33);
                var x = (index * 10) + 10;
                ctx.fillText(text, x, y);
                if(y > 100 + Math.random() * 1e4) {
                    yPositions[index] = 0;
                }
                else {
                    yPositions[index] = y + 10;
                }
            });
        };
        // run_matrix();
        var matrix_interval = setInterval(draw, 33);
        stage.click(function () {
            clearInterval(matrix_interval);
            $(this).parents('div').remove();            
        });
    });
});
