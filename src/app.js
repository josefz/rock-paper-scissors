import Router from '/lib/router/router.js';
import WelcomePage from '/components/welcome-page/welcome-page.js';
import PlayPage from '/components/play-page/play-page.js';


const appRouter = new Router( '#app' );
appRouter.addRoute( '', WelcomePage );
appRouter.addRoute( '#/play', PlayPage );
