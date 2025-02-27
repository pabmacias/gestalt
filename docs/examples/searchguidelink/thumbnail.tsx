import { Avatar, AvatarGroup, Flex, Icon, Image, SearchGuideLink } from 'gestalt';

export default function Example() {
  return (
    <Flex
      alignItems="center"
      direction="row"
      gap={2}
      height="100%"
      justifyContent="center"
      width="100%"
    >
      <SearchGuideLink
        accessibilityLabel="Fatima"
        color="02"
        href="https://pinterest.com"
        onClick={({ event, dangerouslyDisableOnNavigation }) => {
          event.preventDefault();
          dangerouslyDisableOnNavigation();
        }}
        text="Fatima"
        thumbnail={{
          avatar: (
            <Avatar
              name="Fatima"
              src="https://i.pinimg.com/originals/bf/bc/27/bfbc27685d81eb9a8f65c201ea661f0e.jpg"
            />
          ),
        }}
      />
      <SearchGuideLink
        accessibilityLabel="Ayesha and Sora"
        color="03"
        href="https://pinterest.com"
        onClick={({ event, dangerouslyDisableOnNavigation }) => {
          event.preventDefault();
          dangerouslyDisableOnNavigation();
        }}
        text="Ayesha and Sora"
        thumbnail={{
          avatarGroup: (
            <AvatarGroup
              accessibilityLabel="Pins: Ayesha, Sora."
              collaborators={[
                {
                  name: 'Ayesha',
                  src: 'https://i.pinimg.com/originals/c5/5c/ac/c55caca43a7c16766215ec165b649c1c.jpg',
                },
                {
                  name: 'Sora',
                  src: 'https://i.pinimg.com/originals/ab/c5/4a/abc54abd85df131e90ca6b372368b738.jpg',
                },
              ]}
              size="md"
            />
          ),
        }}
      />
      <SearchGuideLink
        accessibilityLabel="Search"
        color="04"
        href="https://pinterest.com"
        onClick={({ event, dangerouslyDisableOnNavigation }) => {
          event.preventDefault();
          dangerouslyDisableOnNavigation();
        }}
        text="Search"
        thumbnail={{
          icon: <Icon accessibilityLabel="search" icon="search" />,
        }}
      />
      <SearchGuideLink
        accessibilityLabel="Design"
        color="01"
        href="https://pinterest.com"
        onClick={({ event, dangerouslyDisableOnNavigation }) => {
          event.preventDefault();
          dangerouslyDisableOnNavigation();
        }}
        text="Design"
        thumbnail={{
          image: (
            <Image
              alt="Design"
              naturalHeight={1}
              naturalWidth={1}
              src="https://i.ibb.co/3CT3Xnp/image.png"
            />
          ),
        }}
      />
    </Flex>
  );
}
