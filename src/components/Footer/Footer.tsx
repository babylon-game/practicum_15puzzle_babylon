export default function Footer(): JSX.Element {
  return (
    <footer className="bg-orange-400 dark:bg-gray-700 position-sticky bottom-4 w-full text-gray-700 dark:text-white">
      <div className="max-w-7xl mx-auto py-4 px-4 overflow-hidden sm:px-6 lg:px-8">
        <time dateTime={new Date().getFullYear().toString()}>{new Date().getFullYear()}</time>
        &nbsp;&copy; Babylon Games. All rights reserved.
      </div>
    </footer>
  );
}
