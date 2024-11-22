type Draggable = {
    drag: () => void;
}

type Resizeable = {
    resize: () => void;
}

type UiWidget = Draggable & Resizeable; // Intersection types are variables that are both types

const ImgComponent:UiWidget = { 
    drag: () => console.log('Dragging'),
    resize: () => console.log('Resizing')
}