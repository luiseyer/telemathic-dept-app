import Avatar from './components/avatar';
import SearchInput from './components/search-input';
import Header from './layouts/header';

export default function Base() {
  return (
    <div className="w-screen h-screen flex flex-row">
      <aside className="bg-blue-500 w-60">
        <Header>
          <h1 className="text-xl text-white p-2 text-center">Teams</h1>
        </Header>
      </aside>
      <main className="container">
        <Header>
          <form className="flex items-center border-2 border-gray-400 rounded-md ml-5 w-1/2">
            <SearchInput name="docksearch" placeholder="Buscar" />
          </form>
          <section className="ml-auto flex gap-2">
            <Avatar
              state={1}
              imgsrc="https://cdn.shopify.com/s/files/1/0246/1030/8171/products/comfort_cool_thumb_cmc_restriction_splint_4_1200x1200.jpg?v=1559116239"
            />
          </section>
        </Header>
      </main>
    </div>
  );
}
