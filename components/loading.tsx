import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Skeleton } from "./ui/skeleton"

export default function Loading() {
  const items = Array.from({ length: 25 }, (_, i) => i)
  return (
    <>
      {items.map((item) => (
        <Card key={item} className="">
          <CardHeader className="">
            <CardTitle className="line-clamp-3 flex min-h-[72px] items-center justify-center text-ellipsis text-center">
              <Skeleton className="h-[48px] w-full" />
            </CardTitle>
            <CardDescription className="line-clamp-3 min-h-[60px] text-ellipsis">
              <Skeleton className="h-4 w-full" />
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <Skeleton className="h-[300px] w-full" />
          </CardContent>
          <CardFooter>
            <Skeleton className="h-8 w-full" />
          </CardFooter>
        </Card>
      ))}
    </>
  )
}
