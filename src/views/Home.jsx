import Section from "../components/Section"

function Home() {

  const items = [
    {
      id: 1,
      title: "Soundtracks - OST",
      description: 'Original Soundtracks',
      image: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6'
    },
    {
      id: 2,
      title: "Soundtracks - OST",
      description: 'Original Soundtracks',
      image: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6'
    },
    {
      id: 3,
      title: "Soundtracks - OST",
      description: 'Original Soundtracks',
      image: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6'
    },
    {
      id: 4,
      title: "Soundtracks - OST",
      description: 'Original Soundtracks',
      image: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6'
    },
    {
      id: 5,
      title: "Soundtracks - OST",
      description: 'Original Soundtracks',
      image: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6'
    }
  ]

  return (
    <div>
      <Section
        title = "Recently played"
        more = "/random"
        items = {items}
      />
    </div>
  )
}

export default Home
