/* 
    createMoviesView()

    factory for a view class that knows how to render the
    movies model. Uses TemplateListView as prototype.
    Overrides render() in order to add event handlers for
    the add to cart buttons.
*/

// function createMoviesView(config) {
//     config.templateView = createMovieView(config);
//     var view = createTemplateListView(config);
    
//     view.afterRender = function() {
//         //add event handlers for add-to-cart buttons
//         this.container.find('.add-to-cart').click(function(){
//             var button = $(this);
//             var eventData = {
//                 movieID: button.attr('data-movie-id'),
//                 format: button.attr('data-movie-format')
//             };
//             view.trigger('addToCart', eventData);
//         });
//     }; //afterRender()

//     //auto-render if we have a model
//     if (config.model)
//         view.render();

//     return view;

// }

function createMenusView(config){
    config.templateView = createMenuView(config);
    var view = createTemplateListView(config);
    
    view.afterRender = function() {
        //add event handlers for add-to-cart buttons
        this.container.find('.add-to-cart').click(function(){
            var button = $(this);
            var eventData = {
                type: button.attr('data-type'),
                name: button.attr('data-name'),
                price:button.attr('data-price'),
                size:null
            };

            if(button.attr('data-size'))
                eventData.size = button.attr('data-size');

            view.eventData = eventData;

            view.trigger('addToCart', eventData);
        });
    }; //afterRender()

    //auto-render if we have a model
    if (config.model)
        view.render();

    return view;
}

