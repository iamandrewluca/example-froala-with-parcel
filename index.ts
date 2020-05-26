import 'froala-pages/css/froala_pages.min.css'
import FroalaPages from 'froala-pages'
// design blocks will try to import a module with name `FroalaPages`
// but actually module name is `froala-pages`
// for this an alias was added in `package.json`
import 'froala-pages/js/pages_design_blocks_pkgd.min.js'

const pages = new FroalaPages('root', {
    key: 'key-here'
})

console.log(pages)