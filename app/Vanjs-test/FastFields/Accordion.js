const { label, div, button, input, img, hr, span, select, option, article, summary, details, h2 , h3 } = van.tags;

export default function Accordion(options ={isOpen: false, containerClass: 'AccordContainer', barClass: 'AccordBar', contentClass: 'AccordContent', 'containerOverride': "",'barOverride': "background-color: rgb(38, 47, 66); overflow: hidden; height: 50px; border-radius: 4px; display: flex; justify-content: space-between; align-items: center; ", 'contentOverride': "" }, bar, content) {


return details({class: options.containerClass, open: options.isOpen},
    summary({class: options.barClass, style: options.barOverride},
      ...bar
    ),
    article({class: options.contentClass, style: options.contentOverride},
      ...content
    ),
  )

};


