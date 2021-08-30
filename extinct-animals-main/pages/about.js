import Link from 'next/link'
import Info_Page_Layout from '../components/info_page_layout'

export default function About() {
    return (
      <Info_Page_Layout>
        <h1>About</h1>
        <p>of this research is to determine if aggregating ordinal and cardinal estimates from multiple people can provide an accurate estimate of the extinction date of organisms.
        </p>
        <h2>
          <Link href="/">
            <a className="linked">Return</a>
          </Link>
        </h2>
      </Info_Page_Layout>
    )
  }
