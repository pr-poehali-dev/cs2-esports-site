import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const LiveMatches = () => {
  const liveMatches = [
    {
      id: 1,
      team1: "NAVI",
      team2: "G2 Esports",
      score: "16:12",
      map: "de_mirage",
      status: "LIVE",
      viewers: "45.2k",
    },
    {
      id: 2,
      team1: "FaZe Clan",
      team2: "Astralis",
      score: "8:7",
      map: "de_inferno",
      status: "LIVE",
      viewers: "32.1k",
    },
  ];

  const upcomingMatches = [
    {
      id: 3,
      team1: "Vitality",
      team2: "Cloud9",
      time: "19:00",
      tournament: "ESL Pro League",
    },
    {
      id: 4,
      team1: "MOUZ",
      team2: "Spirit",
      time: "21:30",
      tournament: "BLAST Premier",
    },
  ];

  return (
    <div className="space-y-8">
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold font-['Montserrat'] text-white">
            Прямые трансляции
          </h2>
          <Badge
            variant="destructive"
            className="bg-red-600 text-white px-3 py-1"
          >
            <Icon name="Radio" size={14} className="mr-1" />2 LIVE
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {liveMatches.map((match) => (
            <Card
              key={match.id}
              className="bg-[#2A2F3C] border-gray-700 hover:border-[#8B5CF6] transition-colors"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge
                    variant="destructive"
                    className="bg-red-600 text-white"
                  >
                    {match.status}
                  </Badge>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Icon name="Users" size={14} className="mr-1" />
                    {match.viewers}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-white">
                      {match.team1}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#8B5CF6] font-mono">
                      {match.score}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-white">
                      {match.team2}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <Icon name="Map" size={14} className="inline mr-1" />
                    {match.map}
                  </div>
                  <Button
                    size="sm"
                    className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white"
                  >
                    <Icon name="Play" size={14} className="mr-1" />
                    Смотреть
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold font-['Montserrat'] text-white mb-6">
          Предстоящие матчи
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {upcomingMatches.map((match) => (
            <Card
              key={match.id}
              className="bg-[#2A2F3C] border-gray-700 hover:border-[#8B5CF6] transition-colors"
            >
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-white">
                      {match.team1}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-400">VS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-white">
                      {match.team2}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="text-gray-400">{match.tournament}</div>
                  <div className="flex items-center text-[#8B5CF6] font-semibold">
                    <Icon name="Clock" size={14} className="mr-1" />
                    {match.time}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LiveMatches;
