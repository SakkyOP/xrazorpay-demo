import ActivityFeed from "../components/ActivityFeed"
import AmountDisplay from "../components/AmountDisplay"
import Banner from "../components/Banner"
import Insights from "../components/Insights"
import NotificationTray from "../components/NotificationTray"
import OnboardingUpdates from "../components/OnboardingUpdates"
import TopBar from "../components/TopBar"

export default function Main() {
  return (
    <div className="flex flex-col items-center w-full pb-5">
      <TopBar />
      <div className="flex flex-col items-center justify-start w-4/6 h-full">
        <AmountDisplay />
        <NotificationTray />
        <OnboardingUpdates />
        <Banner />
        <Insights />
        <ActivityFeed />
      </div>
    </div>
  )
}