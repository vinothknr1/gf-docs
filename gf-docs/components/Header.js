import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'

function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center bg-white px-4 py-2 shadow-md">
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="h-20 w-20 border-0"
      >
        <Icon name="menu" size="3xl"></Icon>
      </Button>
      <Icon name="description" size="5xl" color="blue"></Icon>
      <h1 className="ml-2 text-2xl text-gray-700">GF Docs</h1>
      <div
        className="focus mx-5 flex flex-grow items-center rounded-lg  bg-gray-100 px-5 py-2 text-gray-600 focus-within:text-gray-600
      focus-within:shadow-md md:mx-20 md:flex"
      >
        <Icon name="search" size="3xl" color="gray" />
        <input
          type="text"
          placeholder="Search"
          className="text textbase flex-grow bg-transparent px-5 outline-none"
        />
      </div>
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="ml-5  h-20 w-20 border-0 md:ml-20"
      >
        <Icon name="apps" size="3xl" color="gray"></Icon>
      </Button>
      <img
        loading="lazy"
        className="ml-2 h-12 w-12 cursor-pointer rounded-full"
        src="https://themarketingcrowd.ie/wp-content/uploads/2017/01/Round-Profile-Pic.png"
        alt="profile_img"
      />
    </header>
  )
}

export default Header
