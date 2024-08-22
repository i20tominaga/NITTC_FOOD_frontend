/**
 * v0 by Vercel.
 * @see https://v0.dev/t/j4y95xwMOPp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground py-6 px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold">Welcome to our Udon Shop!</h1>
        </div>
      </header>
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 grid gap-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Reserve Ticket</h2>
            <p className="mb-6">Check the next available ticket and reserve it directly from here.</p>
            <Button size="lg" className="w-full">
              Reserve Ticket
            </Button>
          </div>
          <div className="bg-card p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Order Udon</h2>
            <p className="mb-6">Place your udon order using your reserved ticket.</p>
            <Button size="lg" className="w-full">
              Order Udon
            </Button>
          </div>
        </div>
        <div className="bg-card p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Stock Status</h2>
          <div className="flex items-center justify-between mb-2">
            <p>Current Udon Stock:</p>
            <span className="font-bold text-2xl">78</span>
          </div>
          <div className="text-muted-foreground">
            <p>
              Our udon stock is currently low. We recommend placing your order as soon as possible to ensure
              availability.
            </p>
          </div>
        </div>
        <div className="bg-card p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Notifications</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold mb-2">Store Hours Update</h3>
              <p>
                Our store will be closed on Sunday, June 4th for a special event. We apologize for any inconvenience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Summer Udon Special Offer</h3>
              <p>Enjoy a 20% discount on all udon orders placed this weekend. Don't miss out!</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-muted text-muted-foreground py-4 px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto text-center text-sm">&copy; 2024 Udon Shop. All rights reserved.</div>
      </footer>
    </div>
  )
}
