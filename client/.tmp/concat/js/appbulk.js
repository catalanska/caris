angular.module('templates-main', ['../views/history.html', '../views/home.html', '../views/hotels.html', '../views/photos.html', '../views/place.html']);

angular.module("../views/history.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../views/history.html",
    "<ul class=\"timeline\">\n" +
    "        <li>\n" +
    "            <div class=\"timeline-year\">2003</div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-badge red\"><i class=\"flaticon-cupid\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Nos conocimos</h4>\n" +
    "                    <p><small class=\"text-muted\">O mejor dicho, nos juntaron</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li class=\"timeline-inverted\">\n" +
    "            <div class=\"timeline-badge no-color\"><i class=\"flaticon-stars4 medium green\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Empezamos a salir</h4>\n" +
    "                    <p><small class=\"text-muted\">Un 8 de Diciembre, con 18 añitos y 1000 pájaros en la cabeza</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-year\">2004</div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-badge no-color\"><i class=\"flaticon-gift41 black\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">¡Llega el pequeño de la casa!</h4>\n" +
    "                    <p><small class=\"text-muted\">Sergi, un hermanito para los dos</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li class=\"timeline-inverted\">\n" +
    "            <div class=\"timeline-badge blue\"><i class=\"flaticon-snow44\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Primer viaje juntos</h4>\n" +
    "                    <p><small class=\"text-muted\">Fin de semana en Andorra, sin lujos pero con una ilusión tremenda</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-year\">2005</div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-badge yellow\"><i class=\"flaticon-bigben black\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">London</h4>\n" +
    "                    <p><small class=\"text-muted\">El hotel era un zulo así que mejor pasar todo el día fuera. Un viaje con 1000 historias y una postal</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-year\">2006</div>\n" +
    "        </li>\n" +
    "        <li class=\"timeline-inverted\">\n" +
    "            <div class=\"timeline-badge no-color\"><i class=\"flaticon-tent8 black\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Primera ruta por la Costa Brava</h4>\n" +
    "                    <p><small class=\"text-muted\">Descubrimos una manera especial de viajar. Fue la primera de muuuuuchas acampadas</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-badge green\"><i class=\"flaticon-tree119\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Primeras Navidades en familia</h4>\n" +
    "                    <p><small class=\"text-muted\">¡Uy! parece que la cosa va en serio</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-year\">2007</div>\n" +
    "        </li>\n" +
    "        <li class=\"timeline-inverted\">\n" +
    "            <div class=\"timeline-badge orange\"><i class=\"flaticon-international12 black\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Javi va y se larga a Suecia 5 meses</h4>\n" +
    "                    <p><small class=\"text-muted\">Un Erasmus, primera prueba gorda pero somos cabezones.</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li class=\"timeline-inverted\">\n" +
    "            <div class=\"timeline-badge red\"><i class=\"flaticon-airplane\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">¡De aquí ya no te mueves!</h4>\n" +
    "                    <p><small class=\"text-muted\">Vuelve con un peinado raro y hablando cosas aún más raras</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-badge blue\"><i class=\"flaticon-beach5\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Cádiz + Sevilla</h4>\n" +
    "                    <p><small class=\"text-muted\">Nos enamoramos de Cádiz por siempre jamás y Ester descubre que Sevilla tiene un color y una gente especial</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-year\">2008</div>\n" +
    "        </li>\n" +
    "        <li class=\"timeline-inverted\">\n" +
    "            <div class=\"timeline-badge green\"><i class=\"flaticon-binary7 black\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Primer trabajo decente</h4>\n" +
    "                    <p><small class=\"text-muted\">Haciendo como que sabe programar</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li class=\"timeline-inverted\">\n" +
    "            <div class=\"timeline-badge yellow\"><i class=\"flaticon-graduation22 black\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Carrera acabada</h4>\n" +
    "                    <p><small class=\"text-muted\">No sale en la orla por falta de tiempo, pero se asegura de que en su casa no falte una buena foto</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-badge blue\"><i class=\"flaticon-mountain13\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Benasque + Euskadi</h4>\n" +
    "                    <p><small class=\"text-muted\">Relax y rutas por las montañas y pinchos y playa en Donosti. Un viaje muy completo</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-year\">2009</div>\n" +
    "        </li>\n" +
    "        <li class=\"timeline-inverted\">\n" +
    "            <div class=\"timeline-badge red\"><i class=\"flaticon-airplane2\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Javi se vuelve a Suecia ... ¡2 años de Máster!</h4>\n" +
    "                    <p><small class=\"text-muted\">A día de hoy nadie sabe explicar qué Máster hizo. Un reto definitivo, nosotros confiamos en superarlo aunque muchos duden</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-badge green\"><i class=\"flaticon-female208\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">¡Ester ya es veterinaria!</h4>\n" +
    "                    <p><small class=\"text-muted\">Un éxito y una alegría indescriptible de todos los que la quieren y han sufrido 6 años de carrera</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-badge yellow\"><i class=\"flaticon-surgeon1 black\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Primer trabajo como veterinaria</h4>\n" +
    "                    <p><small class=\"text-muted\">Noches de guardia, sustituciones, prácticas, la inseguridad de una recién licenciada y la distancia entre nosotros ... unos comienzos difíciles</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-year\">2010</div>\n" +
    "        </li>\n" +
    "        <li class=\"timeline-inverted\">\n" +
    "            <div class=\"timeline-badge blue\"><i class=\"flaticon-black401\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Muchos Barcelona - Stockholm</h4>\n" +
    "                    <p><small class=\"text-muted\">Muchos días increíbles juntos, muchas despedidas dolorosas. A pesar de ello, parece que vamos bien</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-badge warning\"><i class=\"flaticon-sun42\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">El mejor verano en la historia de los veranos</h4>\n" +
    "                    <p><small class=\"text-muted\">Javi viene a pasar el verano. Nos alquilamos un pisito en Roda de Barà. Unos meses mágicos</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li class=\"timeline-inverted\">\n" +
    "            <div class=\"timeline-badge\"><i class=\"flaticon-black401\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Vuelta a Suecia</h4>\n" +
    "                    <p><small class=\"text-muted\">Despertamos de nuestro sueño de verano. Un añito más y vuelve aunque sea de los pelos</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-badge red\">7</div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">A todo esto ya llevamos 7 años juntos</h4>\n" +
    "                    <p><small class=\"text-muted\">Y aún así parece que somos los únicos que no dudamos. Es normal, a Javi cuesta tomarle en serio, se lo gana a diario</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-year\">2011</div>\n" +
    "        </li>\n" +
    "        <li class=\"timeline-inverted\">\n" +
    "            <div class=\"timeline-badge yellow\"><i class=\"glyphicon glyphicon-road black\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">La recta final se hace larga</h4>\n" +
    "                    <p><small class=\"text-muted\">Millones de lágrimas pero aún más planes de futuro. No hay webcam que aguante esto</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-badge red\"><i class=\"flaticon-airplane\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">El reencuentro más dulce</h4>\n" +
    "                    <p><small class=\"text-muted\">En Suecia quedan amigos y oportunidades, pero aquí hay algo que cada vez pinta mejor</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li class=\"timeline-inverted\">\n" +
    "            <div class=\"timeline-badge green\"><i class=\"flaticon-beach5\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Deltebre</h4>\n" +
    "                    <p><small class=\"text-muted\">Tiempo de risas, planes e ilusiones. Poco a poco nos redescubrimos más allá de la pantalla</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-badge blue\"><i class=\"flaticon-italy\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Sicília</h4>\n" +
    "                    <p><small class=\"text-muted\">'La dolce vita' a nuestro estilo. Trillones de km en un Fiat 500, durmiendo en cámpings y agotando la Lonely Planet. No podría haber sido mejor.</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li class=\"timeline-inverted\">\n" +
    "            <div class=\"timeline-badge\"><i class=\"flaticon-web40\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Javi empieza a trabajar</h4>\n" +
    "                    <p><small class=\"text-muted\">Parece que su estancia fuera ha servido para algo, le contrata un sueco ¿no es irónico?</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-badge red\"><i class=\"flaticon-heart219\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">¡Nos vamos a vivir juntos! A Gràcia</h4>\n" +
    "                    <p><small class=\"text-muted\">Mucho habíamos hablado de esto y por fín sucede. Y esta vez no es por un verano, ¿quizás sea para siempre? </small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-year\">2012</div>\n" +
    "        </li>\n" +
    "        <li class=\"timeline-inverted\">\n" +
    "            <div class=\"timeline-badge no-color\"><i class=\"flaticon-football35 medium black\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Somos Uno</h4>\n" +
    "                    <p><small class=\"text-muted\">Bajo ese lema aprendemos a convivir. Parecía un reto pero ¡qué fácil y divertido es!</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li class=\"timeline-inverted\">\n" +
    "            <div class=\"timeline-badge orange\"><i class=\"flaticon-baby2\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">¡Nace Laia!</h4>\n" +
    "                    <p><small class=\"text-muted\">Y Javi pasa a ser el más orgulloso de los padrinos</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-badge blue\"><i class=\"flaticon-parthenon\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Creta</h4>\n" +
    "                    <p><small class=\"text-muted\">Un viaje espectacular, una isla para soñar. Empezamos a entender que cualquier sitio es una maravilla si vamos juntos</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li class=\"timeline-inverted\">\n" +
    "            <div class=\"timeline-badge no-color\"><i class=\"flaticon-stripy black\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">¡Creta!</h4>\n" +
    "                    <p><small class=\"text-muted\">La gatita más pequeñaja y miedica. Llega a nuestras vidas por casualidad y se nos gana para siempre</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-year\">2013</div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-badge no-color\"><i class=\"flaticon-diamond30 medium red\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">¡Si quiero! ¡Pero todavía no!</h4>\n" +
    "                    <p><small class=\"text-muted\">A puntito de irnos de Gràcia, Javi prepara una cena muy especial. Después del postre, en la terraza y con vistas a toda la ciudad, llega el momento que lo cambiaría todo</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li class=\"timeline-inverted\">\n" +
    "            <div class=\"timeline-badge green\"><i class=\"flaticon-sideview black small\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">La ciudad no es para nosotros</h4>\n" +
    "                    <p><small class=\"text-muted\">Nos vamos a Begues que es más tranquilo y está más cerca de nuestra gente</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-badge blue\"><i class=\"flaticon-italy\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Cerdeña</h4>\n" +
    "                    <p><small class=\"text-muted\">Otros días memorables después de unos meses muy duros de mudanza y trabajo. Nos metemos en el barco sin camarote y empieza la aventura</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li class=\"timeline-inverted\">\n" +
    "            <div class=\"timeline-badge orange\"><i class=\"flaticon-cactus\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Almería + Cádiz + Granada</h4>\n" +
    "                    <p><small class=\"text-muted\">Un viaje inolvidable con los amigos. Playa, risas y mil momentos más para coleccionar</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-badge no-color\"><i class=\"flaticon-paris8 medium black\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">10 años en Paris</h4>\n" +
    "                    <p><small class=\"text-muted\">Cometimos el error de celebrar nuestro 10 aniversario en esa ciudad tan ... romántica. En ese escenario nos decidimos ¡nos casamos en 2015!</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-year\">2014</div>\n" +
    "        </li>\n" +
    "        <li class=\"timeline-inverted\">\n" +
    "            <div class=\"timeline-badge blue\"><i class=\"flaticon-task black\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Comienzan los preparativos ...</h4>\n" +
    "                    <p><small class=\"text-muted\">Descubrimos l'Avellana y con ella a los ilusionistas Massimo & Katinka. También conocimos a Kepa, Gabriel y Cal Blai. Poco a poco empieza a tomar forma</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-badge yellow\"><i class=\"flaticon-homework black\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Máster de Ester en Madrid</h4>\n" +
    "                    <p><small class=\"text-muted\">Un fin de semana cada mes Ester viaja a Madrid. ¡Un año de mucho estudio y poco tiempo libre!</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li class=\"timeline-inverted\">\n" +
    "            <div class=\"timeline-badge green\"><i class=\"flaticon-parrot\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Tuna (más conocida como Cotorreta) llega a nuestras vidas</h4>\n" +
    "                    <p><small class=\"text-muted\">Y se adueña de la terraza, donde vive a sus anchas</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-badge no-color\"><i class=\"flaticon-cat51 black\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">¡Sherpa! Por fin Ester cede y llega otra gatita a casa</h4>\n" +
    "                    <p><small class=\"text-muted\">Con sus travesuras y su insistente cariño se nos gana a todos, incluso a Creta!</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "\n" +
    "        <li>\n" +
    "            <div class=\"timeline-year\">2015</div>\n" +
    "        </li>\n" +
    "\n" +
    "        <li class=\"timeline-inverted\">\n" +
    "            <div class=\"timeline-badge orange\"><i class=\"flaticon-grapes7 black\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">¡Cuenca!</h4>\n" +
    "                    <p><small class=\"text-muted\">Empezamos este gran año entre amigos y risas. Mil gracias a Aida y su familia, no pudo empezar mejor</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "\n" +
    "        <li>\n" +
    "            <div class=\"timeline-badge no-color\"><img src=\"../images/final/rings.svg\" width=\"45px\" height=\"32px\"></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">El gran día. 27 de Junio</h4>\n" +
    "                    <p><small class=\"text-muted\">El día en que juntaremos a casi todos los que nos habéis ayudado a llegar hasta aquí.<br> ¡Os queremos!</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "\n" +
    "        <li>\n" +
    "            <div class=\"timeline-year\">2065</div>\n" +
    "        </li>\n" +
    "\n" +
    "        <li class=\"timeline-inverted\">\n" +
    "            <div class=\"timeline-badge no-color\"><i class=\"flaticon-elderly red\"></i></div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">¡Bodas de oro!</h4>\n" +
    "                    <p><small class=\"text-muted\">Os estaréis preguntando '¿repetiran vestido y traje?', la respuesta ... dentro de 50 años ;)</small></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "");
}]);

angular.module("../views/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../views/home.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-12 text-center\">\n" +
    "        <!--<h1>Ester <img src=\"../images/final/rings.svg\"  width=\"45px\" height=\"32px\">  Javi</h1>-->\n" +
    "        <img src=\"images/final/LogoE+J.jpg\" id=\"logo-full\">\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\" id=\"frame-row\">\n" +
    "    <div class=\"col-md-6 col-md-offset-3 text-center\">\n" +
    "            <img src=\"images/final/frame_camping.svg\" alt=\"Fotos\" id=\"bike_foto\" class=\"tossing\">\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-12 text-center\">\n" +
    "        <img src=\"images/final/date.svg\" alt=\"Fecha\" id=\"date_banner\">\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("../views/hotels.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../views/hotels.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-6 col-md-offset-3\">\n" +
    "        <h2 class=\"text-center\">¿Dónde dormir? &nbsp;&nbsp;&nbsp;<img src=\"images/final/dont_disturb.svg\" alt=\"Alojamiento\" width=\"40px\"></h2>\n" +
    "        <h3>Les Velles Escoles</h3>\n" +
    "        <p>Hotel rural en Les Irles. 33 plazas reservadas para los invitados a la boda. El precio es de 30€ por persona e incluye el desayuno. <span class =\"girls\">http://www.vellesescoles.com/</span></p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("../views/photos.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../views/photos.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-12 text-center\">\n" +
    "        <h2>¡Compartid con nosotros las fotos de este día!</h2>\n" +
    "        <p class=\"main-content\">\n" +
    "            <a><img src=\"images/final/instagram.svg\" width=\"50px\"> &nbsp;<span class=\"girls big\">#esteryjavi</span></a>\n" +
    "        </p>\n" +
    "\n" +
    "        <div style=\"margin:0 auto;width:{{carousel.width}}\">\n" +
    "            <carousel disable-ng-animate interval=\"carousel.interval\">\n" +
    "                <slide ng-repeat=\"group in carousel.slidesGroups\" active=\"slide.active\" style=\"clear: both;\">\n" +
    "                    <div  style=\"float:left\" ng-repeat=\"slide in group\">\n" +
    "                        <img ng-src=\"{{ slide.images.low_resolution.url }}\" src=\"\" alt=\"\">\n" +
    "                    </div>\n" +
    "                </slide>\n" +
    "            </carousel>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../views/place.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../views/place.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-6 col-md-offset-3\">\n" +
    "        <h2 class=\"text-center\">¿Cómo llegar? &nbsp;<img src=\"images/final/sign.svg\" alt=\"Cómo llegar\" width=\"90px\"></h2>\n" +
    "        <h3><img src=\"images/final/bus.svg\" alt=\"Cómo llegar\" width=\"70px\">&nbsp;&nbsp;En Autocar</h3>\n" +
    "        <p>Un autocar saldrá desde Viladecans y Gavà. Más información en breve.</p>\n" +
    "        <h3>En coche&nbsp;&nbsp;<img src=\"images/final/car.svg\" alt=\"Cómo llegar\" width=\"70px\"></h3>\n" +
    "        <p><strong>¡No utiliceis GPS!</strong> Os llevará por unos bonitos caminos de cabras :)</p>\n" +
    "        <p>L'Avellana se encuentra en el término municipal de Riudecols. Un vez llegados al semáforo que hay a la entrada del pueblo, girad a la derecha y seguid la señalización \"L'Avellana mas d'en Cabre\".</p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

'use strict';

var app = angular.module('ABC', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'templates-main', 'ngTouch']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/inicio");
    //
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/inicio",
            templateUrl: "views/home.html"
        })
        .state('place', {
            url: "/como_llegar",
            templateUrl: "views/place.html"
        })
        .state('hotels', {
            url: "/donde_dormir",
            templateUrl: "views/hotels.html"
        })
        .state('photos', {
            url: "/fotos",
            templateUrl: "views/photos.html",
            controller: "photosCtrl"
        })
        .state('history', {
            url: "/historia",
            templateUrl: "views/history.html"
        });
}]);

app.run(['$rootScope', function($rootScope){

    $rootScope.$on('$stateChangeStart', function(){
        $rootScope.collapseNav();
    });

    $rootScope.collapseNav = function(){
        $rootScope.isNavCollapsed = true;
    };

}]);


app.controller('photosCtrl',[ '$rootScope','$scope', 'Carousel', function($rootScope,$scope,Carousel){
    var width = window.innerWidth;
    var displayMode;
    if(width >= 750 && width < 1024) displayMode = 'tablet';
    else if(width < 750) displayMode = 'mobile';
    else displayMode = 'desktop';

    $scope.carousel = Carousel.create(displayMode);
}]);


app.factory('Carousel', ['Instagram',
    function(Instagram) {
        var groupSlides = function(data, slidesPerGroup){

            var i, first = [], second;

            for (i = 0; i < data.length; i += slidesPerGroup) {
                second = {
                    image1: data[i]
                };
                if (slidesPerGroup == 1) {}
                if (data[i + 1] && (slidesPerGroup == 2 || slidesPerGroup == 3)) {
                    second.image2 = data[i + 1];

                }
                if (data[i + (slidesPerGroup - 1)] && slidesPerGroup == 3) {
                    second.image3 = data[i + 2];
                }
                first.push(second);
            }
            return first;
        };

        return {
            'create': function(displayMode) {

                var carousel = {
                    interval: 7000,
                    hashtag: "wedding",
                    slidesGroups: []
                };

                switch(displayMode) {
                    case 'desktop':
                        carousel.width = "918px";
                        carousel.slidesPerGroup = 3;
                        break;
                    case 'tablet':
                        carousel.width = "612px";
                        carousel.slidesPerGroup = 2;
                        break;
                    default:
                        carousel.width = "303px";
                        carousel.slidesPerGroup = 1;
                }

                Instagram.get().success(function(res) {
                    carousel.slidesGroups = groupSlides(res, carousel.slidesPerGroup);
                });

                return carousel;
            }
        };

    }
]);

app.factory('Instagram', ['$http',
    function($http) {
        return {
            'get': function() {
                var request = '/api/ig_images';
                return $http.get(request);
            }
        };
    }
]);

app.directive('disableNgAnimate', ['$animate', function($animate) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            $animate.enabled(false, element);
        }
    };
}]);


