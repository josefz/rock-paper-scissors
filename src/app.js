import Router from '/lib/router.js';
import WelcomePage from '/container/welcome-page/welcome-page.js';
import PlayPage from '/container/play-page/play-page.js';
import TopScorersPage from '/container/top-scorers-page/top-scorers-page.js';

const appRouter = new Router( '#app' );
appRouter.addRoute( '', WelcomePage );
appRouter.addRoute( '#/play', PlayPage );
appRouter.addRoute( '#/top-scorers', TopScorersPage);
