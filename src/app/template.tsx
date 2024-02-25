import React from 'react'


export default function template({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // <motion.div
        //     initial={{ y: 20, opacity: 0 }}
        //     animate={{ y: 0, opacity: 1 }}
        //     transition={{ duration: 0.5, type: "just" }}

        // >
        <div>
            {children}
        </div>
        // </motion.div>
    )
}
