import React from 'react'

export type AnswerComponentProps = {
    icon: string;
    title: string;
}
export const AnswerComponent: React.FC<AnswerComponentProps> = ({ icon, title }) => {

    return (
        <label className="cursor-pointer">
            <input type="radio" className="peer sr-only" />
            <div className="w-52 h-64 max-w-xl rounded-md bg-white p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-primary-600 peer-checked:ring-primary-400 peer-checked:ring-offset-2">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                        <span className='font-semibold'>{title}</span>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z" /></svg>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <img className="w-full h-full" src={icon} alt="image description" />
                    </div>
                </div>
            </div>
        </label>
    )
}
