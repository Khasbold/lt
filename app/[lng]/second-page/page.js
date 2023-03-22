import Link from 'next/link'
import { useTranslation } from '../../i18n'

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  return (
    <>
      <h1>{t('title_2nd_page')}</h1>
      <Link href={`/${lng}`}>
      <h1>{t('back-to-home')}</h1>
      </Link>
    </>
  )
}