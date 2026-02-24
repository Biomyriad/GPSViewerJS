const { label, div, button, input, img, hr, span, select, option, article, summary, details, h2 , h3 } = van.tags;

export default function Accordion(options, bar, content) {

  options.isOpen = options.isOpen ? options.isOpen : false;
  options.containerClass = options.containerClass ? options.containerClass : 'AccordContainer';
  options.barClass = options.barClass ? options.barClass : 'AccordBar';
  options.contentClass = options.contentClass ? options.contentClass : 'AccordContent';
  options.containerOverride = options.containerOverride ? options.containerOverride : 'margin-bottom: 0px;';
  options.barOverride = options.barOverride ? options.barOverride : `background-color: rgb(38, 47, 66); 
                  overflow: hidden; 
                  height: 50px; 
                  border-radius: 4px; 
                  display: flex; 
                  justify-content: 
                  space-between; 
                  align-items: center;`, 
  options.contentOverride = options.contentOverride ? options.contentOverride : "background-color: rgb(38, 47, 66);";

return details({class: options.containerClass, open: options.isOpen, style: options.containerOverride},
    summary({class: options.barClass, style: options.barOverride},
      bar
    ),
    article({class: options.contentClass, style: options.contentOverride},
      content
    ),
  )

};


