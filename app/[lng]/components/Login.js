'use client'
import { Button, Modal, Label, TextInput, Checkbox } from 'flowbite-react';
import React, { Fragment, useState, useEffect } from 'react'

function Login({ lng, t }) {
    const [show, setShow] = useState(false);
    const [render, setRender] = useState(false);
    useEffect(() => {
        setRender(true);
    }, []);
    return (
        <Fragment>
            {render && (
                <>
                    <Button onClick={() => setShow(!show)}>
                        {t('go-login')}
                    </Button>
                    <Modal
                        dismissible={true}
                        show={show}
                        size="md"
                        onClose={() => setShow(!show)}
                    >
                        <Modal.Header>
                            Terms of Service
                        </Modal.Header>
                        <Modal.Body>
                            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                    Sign in to our platform
                                </h3>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="email"
                                            value="Your email"
                                        />
                                    </div>
                                    <TextInput
                                        id="email"
                                        placeholder="name@company.com"
                                        required={true}
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="password"
                                            value="Your password"
                                        />
                                    </div>
                                    <TextInput
                                        id="password"
                                        type="password"
                                        required={true}
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="remember" />
                                        <Label htmlFor="remember">
                                            Remember me
                                        </Label>
                                    </div>
                                    <a
                                        href="/modal"
                                        className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                                    >
                                        Lost Password?
                                    </a>
                                </div>
                                <div className="w-full">
                                    <Button className='w-full'>
                                        {t('go-login')}
                                    </Button>
                                </div>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Not registered?
                                    <a
                                        href="/modal"
                                        className="text-blue-700 hover:underline dark:text-blue-500"
                                    >
                                        Create account
                                    </a>
                                </div>
                            </div>
                        </Modal.Body>

                    </Modal>
                </>
            )}


        </Fragment>
    )
}
export default Login