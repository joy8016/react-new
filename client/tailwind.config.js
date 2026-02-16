/**@type {import ('tailwindcss').Config}*/

export default{
    content :[
        "./index.html",
        "./src/**/*.{js,ts,jsx.tsx}",
    ],
    theme:{
        extent:{
            fontSize:{
                'course-details-heading-small': ["26px", '36px'],
                "course-details-heading-large": ["36px", '44px'],
               'home-heading-small': ["28px", '34px'],
                'home-heading-large': ["48px", '56px'],
                "default":['15px', '21px'], 
                
            },
            gridTemplteColumns:{
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            }, 
            spacitng:{
                'section-height':'500px'
            }

        },
    },
    plugins:[],
}