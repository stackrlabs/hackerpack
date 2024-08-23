import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export const SandboxBadge = () => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger>
          <Badge variant="destructive">Sandbox Mode</Badge>
        </TooltipTrigger>
        <TooltipContent className="p-2 rounded-md bg-gray-700 text-white">
          <p className="text-wrap max-w-[300px] ">
            In Sandbox mode, the blocks are not sent to Vulcan or L1 for
            verification, restricting status to C1.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
