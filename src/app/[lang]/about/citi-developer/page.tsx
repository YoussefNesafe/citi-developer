import LatestNews from '@/app/_sections/shared/LatestNews'
import { SharedSectionsProps } from '@/models/IDictionary';
import getLocalizedData from '@/services/getLocalizedData';
import React from 'react'
import { Locale } from '../../../../../i18n-config';

const CitiDeveloperPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {

  const { latestNews } = await getLocalizedData<SharedSectionsProps>(lang, 'shared');
  return (
    <>

      <LatestNews {...latestNews} className="section-py" />
    </>
  )
}

export default CitiDeveloperPage