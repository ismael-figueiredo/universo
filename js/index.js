import {Router} from './router.js'

const router = new Router()

router.add('/','/pages/home.html')
router.add('/universo','/pages/universo.html')
router.add('/exploracao','/pages/exploracao.html')
router.add(404,'/pages/404.html')


//animação
router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()

document.querySelectorAll('header a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);

        document.querySelector('.page').classList.remove('active');
        target.classList.add('active', 'slide-left');
    });
});
