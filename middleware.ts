/**
 * El middleware le permite ejecutar código antes de que se complete una solicitud, luego, en función de la solicitud entrante, puede modificar la respuesta reescribiendo, redirigiendo, agregando encabezados o configurando cookies.

El middleware se ejecuta antes que el contenido en caché, por lo que puede personalizar páginas y archivos estáticos. Los ejemplos comunes de Middleware serían la autenticación, las pruebas A/B, las páginas localizadas, la protección contra bots y más. Con respecto a las páginas localizadas, puede comenzar con el enrutamiento i18n e implementar Middleware para casos de uso más avanzados.
 */

// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/api/entries/")) {
    //Identificamos que se esta haciendo una llamada a una entry
    const id = req.nextUrl.pathname.replace("/api/entries/", ""); //Obtenemos el id que se esta solicitando
    const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$"); //Creamos una RegExp para validar el id

    if (!checkMongoIDRegExp.test(id)) {
      //Identificamos si el ID corresponde a Mongo
      const url = req.nextUrl.clone(); //Clonamos la url
      url.pathname = "/api/bad-request"; //Cambiamos la URL a un bad-request
      url.search = `?message=${id} is not a valid ID`;
      return NextResponse.rewrite(url); //Reescribimos el URL redireccionando al bad-req
    }
  }

  //   console.log({ req: req.nextUrl.pathname });
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  //   matcher: "/about/:path*",
  matcher: [
    // "/api/:path*",
    "/api/entries/:path*",
  ],
};
