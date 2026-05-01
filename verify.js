const fs = require('fs');
const babel = require('@babel/core');

const content = fs.readFileSync('index.html', 'utf-8');
const start = content.indexOf('<script type="text/babel">') + 26;
const end = content.lastIndexOf('</script>');
const code = content.substring(start, end);

try {
    babel.transformSync(code, { presets: ['@babel/preset-react'] });
    console.log('Syntax OK');
} catch (e) {
    console.error('Syntax Error:', e.message);
}
