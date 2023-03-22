'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

function LanguageHeader({ lng, t }) {
    const languageChanged = (item) => {
        document.cookie = `i18next=${item}`;
        document.cookie = `omg=${item}`;
    }
    return (
        <Menu as="div" className="relative inline-block text-left z-50">
            <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md hover:bg-indigo-800 bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <Image src={lng === 'en' ? '/united-kingdom.png' : lng === 'mn' ? '/mongolia.png' : '/china.png'} width={20} height={20} alt={'result.title'} priority />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="dark:bg-black absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                        <Menu.Item onClick={() => languageChanged('mn')}>
                            <Link
                                href={'/mn'}
                                className='text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm dark:text-white'
                            >
                                <Image className="mr-2 h-5 w-5" src='/mongolia.png' width={20} height={20} alt={'result.title'} />
                                {t('language_mn')}
                            </Link>
                        </Menu.Item>
                        <Menu.Item onClick={() => languageChanged('en')}>
                            {({ active }) => (
                                <Link
                                    href={'/en'}
                                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm dark:text-white`}
                                >
                                    <Image className="mr-2 h-5 w-5" src='/united-kingdom.png' width={20} height={20} alt={'result.title'} />
                                    {t('language_en')}
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item onClick={() => languageChanged('cn')}>
                            {({ active }) => (
                                <Link
                                    href={'cn'}
                                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm dark:text-white`}
                                >
                                    <Image className="mr-2 h-5 w-5" src='/china.png' width={20} height={20} alt={'result.title'} />
                                    {t('language_cn')}
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
export default LanguageHeader