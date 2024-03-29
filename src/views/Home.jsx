import Section from "../components/Section"

function Home() {

  const items = [
    {
      id: 1,
      title: "Soundtracks - OST",
      description: 'Original Soundtracks',
      image: 'https://cdn.dribbble.com/users/3756162/screenshots/15213760/media/ffeae34c81e5188c86b88f4aa1eee7e2.jpg?resize=1600x1200&vertical=center',
      type: 'album'
    },
    {
      id: 2,
      title: "Soundtracks - OST",
      description: 'Original Soundtracks',
      image: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6',
      type: 'album'
    },
    {
      id: 3,
      title: "Soundtracks - OST",
      description: 'Original Soundtracks',
      image: 'https://cdn.dribbble.com/users/3756162/screenshots/11531828/media/1321a8336b4ccd9b5c37f4652ac9bd13.jpg?resize=1600x1200&vertical=center',
      type: 'artist'
    },
    {
      id: 4,
      title: "Soundtracks - OST",
      description: 'Original Soundtracks',
      image: 'https://cdn.dribbble.com/users/5319151/screenshots/14158951/media/f295e24adceb04caa5a1a42d6b678c05.jpg?resize=1600x1200&vertical=center',
      type: 'podcast'
    },
    {
      id: 5,
      title: "Soundtracks - OST",
      description: 'Original Soundtracks',
      image: 'https://cdn.dribbble.com/userupload/10214560/file/original-8c5cd8140d7503c6b166fe83e2dc2ecd.jpg?resize=1504x1128',
      type: 'album'
    }
  ]

  return (
    <div className="grid gap-y-8">
      <Section
        title = "Recently played"
        more = "/random"
        items = {items}
      />
      <Section
        title = "Shows to try"
        more = "/random"
        items = {items}
      />
      <Section
        title = "Made for you"
        more = "/random"
        items = {items}
      />
    </div>
  )
}

export default Home
