
export const LoginProviders = () => {

    const providers = [
        {
            name: 'Google',
            icon: 'https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA',
            ref: "http://www.google.com"
        },
        {
            name: 'Facebook',
            icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-round-color-icon.png',
            ref: "http://www.facebook.com"
        },
        {
            name: 'Apple',
            icon: 'https://www.svgrepo.com/show/69341/apple-logo.svg',
            ref: "http://www.apple.com"
        }
    ]

    return (
        <div className="providers-container">
           {
            providers.map(prov => (
                <a href={ prov.ref } role="button" key={prov.name}>
                    <img src={ prov.icon } alt={prov.name} />
                </a>
            ))
           }
        </div>
    )
}