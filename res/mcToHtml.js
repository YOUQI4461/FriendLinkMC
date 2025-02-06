function mcToHtml(text) {
    const colorCodes = {
        '0': 'black',
        '1': 'dark_blue',
        '2': 'dark_green',
        '3': 'dark_aqua',
        '4': 'dark_red',
        '5': 'dark_purple',
        '6': 'gold',
        '7': 'gray',
        '8': 'dark_gray',
        '9': 'blue',
        'a': 'green',
        'b': 'aqua',
        'c':'red',
        'd': 'light_purple',
        'e': 'yellow',
        'f': 'white',
        'k': 'obfuscated',
        'l': 'bold',
       'm':'strikethrough',
        'n': 'underline',
        'o': 'italic',
        'r': 'reset'
    };

    let html = '';
    let i = 0;
    while (i < text.length) {
        if (text[i] === '§') {
            i++;
            const code = text[i];
            if (colorCodes[code]) {
                if (colorCodes[code] ==='reset') {
                    html += '</span>';
                } else if (['k', 'l','m', 'n', 'o'].includes(code)) {
                    html += `<span style="text-decoration: ${colorCodes[code]}">`;
                } else {
                    html += `<span style="color: ${colorCodes[code]}">`;
                }
            }
        } else {
            html += text[i];
        }
        i++;
    }
    // 关闭所有未关闭的标签
    while (html.match(/<span/g) && html.match(/<span/g).length > html.match(/<\/span>/g)?.length) {
        html += '</span>';
    }
    return html;
}

// I Love You