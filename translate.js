function translateNode(node) {
    node.childNodes.forEach(child => {
        if (child.nodeType === Node.TEXT_NODE) {
            child.textContent = "";
        } else if (child.nodeType === Node.ELEMENT_NODE) {
            translateNode(child);
        }
    });
}

translateNode(document.body);