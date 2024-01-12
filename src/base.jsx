import { IconHome, IconInbox, IconPencilPlus } from '@tabler/icons-react';
import Avatar from './components/avatar';
import IconButton from './components/icon-button';
import SearchInput from './components/search-input';
import Header from './layouts/header';
import AppContainer from './layouts/app-container';
import VerticalNavigation from './layouts/vertical-navigation';

export default function Base() {
  return (
    <AppContainer>
      <aside className="bg-blue-500 w-60">
        <Header>
          <h1 className="text-2xl my-[0.12em] text-white p-2 text-center w-full">Support Teams</h1>
        </Header>
        <hr className="mx-4 bg-gray-200 rounded-md" />
        <VerticalNavigation>
          <ul className="list-none gap-2 my-4 px-2">
            <li className="flex gap-3 items-center text-lg">
              <IconHome size="1.2em" />
              Home
            </li>
          </ul>
        </VerticalNavigation>
      </aside>
      <main className="container">
        <Header>
          <form className="flex items-center border-2 rounded-md ml-5 w-1/2">
            <SearchInput name="docksearch" placeholder="Buscar" />
          </form>
          <section className="ml-auto flex gap-3 items-center">
            <IconButton>
              <IconPencilPlus size="1.5em" />
            </IconButton>
            <IconButton>
              <IconInbox size="1.5em" />
            </IconButton>
          </section>
          <section className="flex items-center mx-2">
            <Avatar
              state={1}
              imgsrc="https://cdn.shopify.com/s/files/1/0246/1030/8171/products/comfort_cool_thumb_cmc_restriction_splint_4_1200x1200.jpg?v=1559116239"
            />
          </section>
        </Header>
      </main>
    </AppContainer>
  );
}
