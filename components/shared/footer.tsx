import React from 'react'

export const Footer = () => {
    return (
        <footer className="w-full py-7 mt-12 border-t">
            <div className="mx-auto flex flex-col md:flex-row gap-y-3 md:gap-y-0 items-center justify-around container">
                <div className="flex items-center gap-x-2">
                    <span>Logo</span>
                    <span>Name</span>
                </div>

                <div>
                    © Copyright 2024
                </div>
            </div>
        </footer>
    )
}