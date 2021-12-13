import Link from 'next/link'
import css from '@/styles/modules/404.module.scss'

export default function NotFoundPage404() {
  return (
    <div className={css.stripe}>
      <div className={`${css.stripe_inner} flex flex-col`}>
        <h1 className="mb-4 leading-tight font-[Anton] text-center">
          404
          <br />
          NOT FOUND
        </h1>

        <Link href="/">
          <a className="px-4 text-xl rounded shadow py-1.5 bg-black/70 font-bold text-amber-400 backdrop-blur align-middle">
            HOME
          </a>
        </Link>
      </div>
    </div>
  )
}
