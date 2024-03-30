import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import screenshotRca from '@/images/screenshots/rca.png'
import Image from 'next/image'
import { LandingPageFragment } from '@/lib/basehub-queries'
import { RichText } from "basehub/react-rich-text"



const images = {
    cloudUp: CloudArrowUpIcon,
    server: ServerIcon
}

export default function DynamicAnalysis({ dynamicAnalysis }: LandingPageFragment) {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                    <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600">{dynamicAnalysis.subtitle}</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{dynamicAnalysis.title}</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                {dynamicAnalysis.description}
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {dynamicAnalysis.features.items.map((feature) => {
                                    const Icon = images[feature.icon as keyof typeof images]
                                    return <div key={feature._title} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <Icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                        </dt>{' '}
                                        <dd className="inline"><RichText>{feature.feature.json.content}</RichText></dd>
                                    </div>
                                }
                                )}
                            </dl>
                        </div>
                    </div>
                    <div className="sm:px-6 lg:px-0">
                        <div className="relative isolate overflow-hidden bg-gray-300 pl-6 pt-2 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-8 lg:mx-0 lg:max-w-none">
                            <div
                                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-gray-100 opacity-20 ring-1 ring-inset ring-white"
                                aria-hidden="true"
                            />
                            <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                                <Image src={screenshotRca} alt="RCA screenshot" width={500} height={495} />
                                <div
                                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                                    aria-hidden="true"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}