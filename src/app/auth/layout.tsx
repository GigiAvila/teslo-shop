export default function ShopLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className='flex justify-center'>
      <div className='px-10 w-full sm:w-[350px]'>{children}</div>
    </main>
  )
}
