'use client'
import React from 'react';
import { useTranslation } from '../../i18n/client';
import Image from 'next/image';
import LanguageHeader from './LanguageHeader';
import Login from './Login';
import ThemeColorChanger from './ThemeColorChanger';

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'To Do', href: '/todos', current: false },
    { name: 'Search Movie', href: '/search', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
function Header({ lng }) {
    const { t } = useTranslation(lng);
    return (
        <>
            <div className="min-h-full">
                <nav className="bg-white border-gray-200 dark:bg-gray-900">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                        <a href="https://flowbite.com" className="flex items-center">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                        </a>
                        <div className="flex items-center">
                            <ThemeColorChanger />
                            <a href="tel:5541251234" className="ml-2 mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">Лавлах утас: (555) 412-1234</a>
                            <LanguageHeader lng={lng} t={t} />
                            <Login lng={lng} t={t} />
                        </div>
                    </div>

                </nav>
                <nav className="bg-gray-50 dark:bg-gray-700">
                    <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
                        <div className="flex items-center">
                            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                                <li>
                                    <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Company</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Team</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Features</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default Header