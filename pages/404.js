import Layout from "../components/layout"
import Link from "next/link"

const Pagina404 = () => {
  return (
    <Layout title="Page not found"> 
        <p className="text-center py-32 text-clear-blue">Pagina no encontrada</p>
        <div className="text-center my-20">
            <Link legacyBehavior href="/">
                <a className="text-red-fond">Ir al inicio</a>
            </Link>
        </div>
    </Layout>
  )
}

export default Pagina404