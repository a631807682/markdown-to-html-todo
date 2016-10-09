(function() {

    var diy = function(converter) {
        return [

            {
                type: 'output',
                filter: function(source) {
                    var elements = $(source);
                    var output = [];

                    for (var i = 0; i < elements.length; i++) {
                        var element = $(elements[i]);
                        var results = null;
                        var memu = null;
                        var content = null;
                        switch (element.prop('tagName')) {
                            case 'H1':
                            case 'H2':
                                element.attr('style', 'color:#428bca');
                            case 'H3':
                            case 'H4':
                            case 'H5':
                            case 'H6':
                                element.attr('id', element.text());
                                break;
                            case 'TABLE':
                                element.attr('class', 'table table-striped')
                                break;
                        }


                        output.push(element);
                    }

                    return $('<div>').append(output).html();
                }
            }

        ];
    };

    // Client-side export
    if (typeof window !== 'undefined' && window.showdown && window.showdown.extensions) { window.showdown.extensions.diy = diy; }
    // Server-side export
    if (typeof module !== 'undefined') module.exports = diy;

}());
