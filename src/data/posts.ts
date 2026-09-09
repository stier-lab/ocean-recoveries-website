export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  featuredImage: string;
  tags: string[];
  aliases?: string[];
  content: string;
  doiUrl?: string;
  openAccess?: boolean;
  pdfUrl?: string;
}

export const posts: BlogPost[] = [
  {
    slug: "fish-diversity-helps-keep-ocean-nutrient-cycling-stable",
    title: "Fish Diversity Helps Keep Ocean Nutrient Cycling Stable",
    date: "2026-09-08",
    author: "White et al.",
    excerpt: "A PNAS synthesis of 146 marine fish-community time series shows that species richness and asynchronous biomass fluctuations help stabilize consumer-mediated nitrogen supply across coral reefs, mangroves, seagrass beds, and kelp forests.",
    featuredImage: "/images/yellow-striped-grunts-coral-reef.jpeg",
    tags: ["Publication","2026","Coral","Kelp"],
    aliases: [],
    doiUrl: "https://doi.org/10.1073/pnas.2532469123",
    openAccess: true,
    pdfUrl: "",
    content: `Fish are often treated as harvest, predators, grazers, or biodiversity. This paper puts another role in the foreground: fish move nutrients through marine ecosystems. Through excretion, fish recycle nitrogen and other nutrients back into the water and benthos, shaping the conditions that algae, corals, seagrasses, microbes, and other organisms experience. If those nutrient flows swing wildly through time, ecosystem function can become less reliable even when the community still looks diverse on paper. Led by Mack White and a large collaborative team, we asked whether the diversity of marine fish communities makes consumer-mediated nutrient dynamics more stable. The synthesis drew on 146 time series from six long-term monitoring programs, spanning roughly 25 years from 1999 to 2023 and representing about 1.5 million individual fishes. The data covered coral reefs, mangrove creeks, seagrass beds, and kelp forests, which made it possible to ask whether the same stability logic holds across very different marine ecosystems. Across ecosystems, species richness was strongly and positively associated with the temporal stability of nitrogen supply. That result matches a central idea from biodiversity-stability theory: when more species contribute to an ecosystem process, the process can be buffered against environmental variability. But richness was not the whole story, especially within individual ecosystems. The more consistent local signal was asynchrony. Fish species do not all rise and fall together. Some increase when others decline, and those offsetting fluctuations can keep total nutrient supply steadier through time. When fish biomass fluctuated more synchronously, consumer-mediated nutrient dynamics became less stable. In other words, a community can lose functional stability not only by losing species, but also by having the remaining species respond to change in the same way at the same time. That point matters for conservation and management because nutrient cycling is one of the quieter ways animals hold ecosystems together. Protecting fish diversity is not just about maintaining species lists or total biomass. It is also about preserving a portfolio of consumers whose different responses through time help keep ecosystem processes from becoming erratic as oceans warm, food webs change, and marine communities are increasingly disturbed.

## Citation

White, Mack; James, W. Ryan; Lemoine, Nathan P.; Peters, Joseph R.; Stier, Adrian C.; Emery, Kyle A.; Castorani, Max C. N.; Capone, Dante A.; Štajner, Anya; Enright, Lauren N.; Grier, Shalanda R.; Cawley, Grace F.; Spivak, Amanda C.; Nelson, James A.; Hopcroft, Russell R.; Chen, Angel; Lyon, Nicholas J.; Kui, Li; Caselle, Jennifer E.; Strickland, Bradley A.; Allgeier, Jacob E.; Rehage, Jennifer S.; Burkepile, Deron E. (2026). Scale-dependent effects of species richness and asynchrony regulate the temporal stability of consumer-mediated nutrient dynamics. *Proceedings of the National Academy of Sciences*.

[Read the full paper](https://doi.org/10.1073/pnas.2532469123)

*This paper is Open Access.*`,
  },
  {
    slug: "coral-associated-fish-accelerate-coral-wound-healing",
    title: "Coral-Associated Fish Accelerate Coral Wound Healing",
    date: "2026-06-15",
    author: "Vega et al.",
    excerpt: "In a Mo'orea experiment, corals sharing their branches with damselfish healed injuries far faster, closing large wounds roughly twice as quickly and holding onto their photosynthetic performance, showing that reef fishes help corals recover from physical damage, not just grow.",
    featuredImage: "/images/pocillopora-damselfish-reef-school.jpeg",
    tags: ["Publication","2026","Coral","Mutualism","Recovery","Symbiosis"],
    aliases: ["coral-s-live-in-fish-are-reef-medics-that-speed-wound-healin"],
    doiUrl: "https://doi.org/10.1098/rsbl.2026.0177",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1fXL6SgnHfVD8NxQ-lqqMuFpwlYcU3B3r&usp=drive_fs",
    content: `We have come to think of a coral not as a single organism but as a holobiont: a coral animal, its photosynthetic algae, and a broader cast of fishes and invertebrates that live in and around its branches. Much of the recent excitement about these partnerships has focused on how they help corals cope with slow, large-scale stressors like warming and bleaching. But corals also face a more immediate hazard: physical injury from predators, storms, and handling. A wound that fails to close can be overgrown by algae or invaded by pathogens, threatening the whole colony. Whether the fishes living inside a coral help it heal those wounds had gone almost entirely untested. Led by Hayden Vega, and working with Craig Osenberg, Ashley Seifert, Ninah Munk, and me, we set out to find out. At the Gump Station in Mo'orea, French Polynesia, we ran a controlled experiment on the branching coral Pocillopora, one of the most common reef-builders in the lagoon and a favorite home of the yellowtail damselfish, Dascyllus flavicaudus. We cut 72 coral fragments to a standard size, then gave them either no wound, a small wound, or a large wound. Half the tanks housed a group of damselfish; the other half had none. Every coral received the same food and light. Then, for three weeks, we photographed the wounds and watched them close. The fish made a striking difference, and the difference grew with the size of the injury. For small wounds, corals living with damselfish healed about 38% faster than corals without them. For large wounds, the effect was even larger: healing rates jumped by 55%, so that wounded corals with fish closed their injuries roughly twice as fast as those without. By the end of the experiment, most of the wounds on corals with fish had fully closed, while most of the wounds on corals without fish were still open. Because our clock stopped at 21 days, we almost certainly underestimated how much the fish helped. Healing was not the only thing that suffered when fish were absent. We also measured photosynthetic efficiency, a gauge of how well the coral's algal symbionts were working. In corals with damselfish, that efficiency stayed high regardless of how badly the coral had been wounded. In corals without fish, it fell steadily as wounds got larger. Turf algae told the same story: colonizing algae took hold on wounds about nine times more often when fish were absent, exactly where a coral can least afford the competition. Interestingly, the fish did not measurably change how much new skeleton the corals laid down. Their benefit was concentrated in tissue repair and symbiont performance. Why would a resident fish speed a coral's recovery? Several mechanisms likely act together. Damselfish excrete ammonium-rich waste that fertilizes the coral's algae, supplying the extra energy that rebuilding tissue demands. Their constant movement through the branches, especially at night when oxygen runs low and the metabolic cost of healing is high, stirs water and delivers oxygen. And by keeping wounds from being smothered by algae, they buy the coral time to close them. Together, these findings add tissue repair to the growing list of ways coral-associated fishes support reef resilience, alongside their known roles in coral growth and heat tolerance. Protecting these everyday partnerships may be as important for reef recovery as protecting the corals themselves.

## Citation

Vega, Hayden; Osenberg, Craig W.; Seifert, Ashley W.; Munk, Ninah; Stier, Adrian C. (2026). Coral-associated fishes accelerate coral wound healing and photosynthetic recovery. *Biology Letters*.

[Read the full paper](https://doi.org/10.1098/rsbl.2026.0177)

*This paper is Open Access.*`,
  },
  {
    slug: "why-choosing-the-best-coral-can-backfire-for-damselfish",
    title: "Why Choosing the Best Coral Can Backfire for Damselfish",
    date: "2026-03-18",
    author: "Detmer et al.",
    excerpt: "Our model of coral-damselfish mutualisms shows that fish should evolve a strong preference for large, high-quality corals, yet that individually smart choice can leave the whole fish population smaller and slower to recover, a less visible eco-evolutionary conflict born from how host quality changes with age.",
    featuredImage: "/images/damselfish-pair-acropora-coral.jpeg",
    tags: ["Publication","2026","Mutualism","Coral","Models","Symbiosis"],
    aliases: [],
    doiUrl: "https://doi.org/10.1016/j.ecolmodel.2026.111567",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1-eHhMANhgWw5ZZrCs4cwlYbpwRdvg3yY&usp=drive_fs",
    content: `Partners in a mutualism are rarely all alike. A branching coral shifts from a tiny, vulnerable juvenile to a large, structurally complex adult over its lifetime, and from the perspective of a coral-dwelling damselfish, a big adult coral is simply a better home than a small one. When the quality of a partner changes this substantially across its life, which hosts should a fish choose to settle on, and does that choice, repeated across a whole population, help or hurt the partnership? Led by Raine Detmer, and with Craig Osenberg, Holly Moeller, and me, we built a mathematical model to work through the consequences. Our model follows a long-lived host through three life stages, from juvenile to small adult to large adult, with host quality rising as the coral grows. The damselfish partner helps its host in one of two ways: by boosting the coral's growth through nutrients from its waste (a nutritional mutualism), or by improving the coral's survival, for example by deterring predators (a defensive mutualism). We then let the fish's behavior evolve. The key trait was how strongly recruiting fish preferred to settle on large, adult corals rather than spreading themselves across corals of all sizes. Evolution gave a clear and intuitive answer: fish should evolve a strong preference for the best, adult hosts. An individual fish that settles on a high-quality coral has the best odds of surviving, so that preference is favored generation after generation. But when we tallied the consequences for the whole fish population, the intuitive answer turned out to be self-defeating. Populations of choosy fish were often smaller, and recovered more slowly from disturbances, than populations that spread their benefits more evenly across corals of every age. By ignoring juvenile corals, the fish gave up a chance to help small hosts grow into the very adult hosts they depend on. This gap between what is best for the individual and what is best for the population was largest for nutritional mutualisms, cases where the fish speeds its host's growth. There, helping a juvenile coral pays a compounding dividend, because a faster-growing juvenile becomes a large adult sooner, expanding the supply of high-quality homes down the line. For defensive mutualisms, where the fish mainly improves survival rather than growth, the conflict all but vanished: the evolutionarily favored behavior and the population-optimal behavior lined up closely. This tension emerged with no cheating or exploitation anywhere in the system. It is a conflict born purely from how host quality changes with age. To check that our model was describing something real, we turned to survey data on Pocillopora corals and their resident damselfish, including Dascyllus flavicaudus, Dascyllus aruanus, and Chromis viridis, in Mo'orea. As the model predicts, damselfish were scarce on small colonies and virtually absent from the smallest, juvenile corals, crowding instead onto larger adult hosts. That strong real-world preference for high-quality hosts matches the behavior our model says should evolve, and reminds us that the choices which look smartest for an individual are not always the ones that keep a partnership, or a population, healthy. For anyone hoping to conserve or restore these coral-fish relationships, it is a case for watching the evolutionary and the ecological dynamics at once.

## Citation

Detmer, A. Raine; Osenberg, Craig W.; Stier, Adrian C.; Moeller, Holly V. (2026). Eco-evo conflicts in a stage-structured mutualism: modeling the consequences of ontogenetic variation in host quality. *Ecological Modelling*.

[Read the full paper](https://doi.org/10.1016/j.ecolmodel.2026.111567)

*This paper is Open Access.*`,
  },
  {
    slug: "reef-fish-crowding-effects-vary-across-species-and-contexts",
    title: "Reef Fish Crowding Effects Vary Across Species and Contexts",
    date: "2025-12-18",
    author: "Stier et al.",
    excerpt: "This meta-analysis of 38 reef fish species across 56 studies shows that density-dependent mortality varies substantially both within and among species, changing how scientists think about fish population regulation.",
    featuredImage: "/images/barracuda-school-underwater-blue.jpg",
    tags: ["Publication","2025"],
    aliases: ["fish-populations-don-t-follow-simple-rules-and-that-changes-"],
    doiUrl: "https://doi.org/10.1111/ele.70262",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1u1irOFvUhBBwtxh5U5lyzpS5tVJz_n16&usp=drive_fs",
    content: `This meta-analysis of 38 reef fish species across 56 studies shows that density-dependent mortality varies substantially both within and among species, changing how scientists think about fish population regulation. The researchers conducted a broad meta-analysis examining 147 estimates of intraspecific density-dependent mortality from studies of reef fish, primarily during early life stages. The magnitude of density-dependent mortality was inconsistent both within and among species. Predators amplified the negative effects of density on fish survival. Density-dependent mortality was greater for species that typically colonize at low densities or achieve larger maximum sizes. Even within a single species, the strength of density-dependent mortality varied substantially, often by several orders of magnitude, and sometimes changed sign. Understanding population regulation is essential for fisheries management and conservation. The study shows that density dependence does not operate consistently. Environmental context, predator presence, and species traits all shape how fish populations respond to crowding.

## Citation

Stier, Adrian C.; Osenberg, Craig W. (2025). Widespread Heterogeneity in Density-Dependent Mortality of Nearshore Fishes. *Ecology Letters*.

[Read the full paper](https://doi.org/10.1111/ele.70262)`,
  },
  {
    slug: "climate-change-creates-hard-trade-offs-for-fisheries-managem",
    title: "Climate Change Creates Hard Trade-Offs for Fisheries Management",
    date: "2025-12-18",
    author: "Samhouri et al.",
    excerpt: "This modeling study shows a trade-off in fisheries management under climate change: strategies that protect fish populations often reduce harvest, while strategies that maximize harvest can leave populations vulnerable.",
    featuredImage: "/images/hurricane-earth-from-space.jpeg",
    tags: ["Publication","2025","Climate","Management","Conservation"],
    aliases: ["climate-change-forces-an-impossible-choice-for-fisheries-sav"],
    doiUrl: "https://doi.org/10.1371/journal.pclm.0000624",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1JeG8bGu9DqB7YVVcym8XkgfAdL6vpIdl&usp=drive_fs",
    content: `This modeling study shows a trade-off in fisheries management under climate change: strategies that protect fish populations often reduce harvest, while strategies that maximize harvest can leave populations vulnerable. The researchers developed a model of a harvested fish population experiencing climate-driven changes in demography, then compared different management strategies that either adapt to new conditions or maintain historical practices. Climate impacts impose a choice between management strategies that favor fishery yield or population biomass but not both. When climate caused a population's carrying capacity to increase, or its productivity to decrease, a climate-adaptive strategy maintained higher population biomass but produced similar or lower yield than fixed management. Managers face difficult trade-offs between conservation and economic goals under climate change. As climate change reshapes ocean ecosystems, fisheries managers worldwide must decide how to respond. The research shows that there is no single perfect solution. Each adaptation strategy involves trade-offs between economic benefits and conservation outcomes.

## Citation

Samhouri, Jameal F.; Detmer, A. Raine; Marshall, Kristin N.; Stier, Adrian C.; Berger, Aaron; Liu, Owen R.; Shelton, A. Ole (2025). Course corrections responding to climate impacts produce divergent effects on population biomass and harvest in fisheries. *PLOS Climate*.

[Read the full paper](https://doi.org/10.1371/journal.pclm.0000624)

*This paper is Open Access.*`,
  },
  {
    slug: "how-coral-associated-fish-help-corals-grow-and-recover",
    title: "How Coral-Associated Fish Help Corals Grow and Recover",
    date: "2025-12-16",
    author: "Stier et al.",
    excerpt: "This review paper synthesizes how certain fish species that live closely with corals provide important services to their coral hosts, including enhanced oxygenation, nutrient delivery, sediment removal, and protection from predators and diseases.",
    featuredImage: "/images/chromis-acropora.jpeg",
    tags: ["Publication","2025","Symbiosis","Coral"],
    aliases: ["fish-are-providing-life-saving-services-to-corals-and-scient"],
    doiUrl: "https://doi.org/10.1007/s00338-025-02647-4",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1s57zCfPWOFHnLOLfWo1SQEt5WvTKN-wY&usp=drive_fs",
    content: `Our review shows that on coral reefs, the relationship between fish and their coral hosts runs deeper than simple shelter-seeking. We synthesized decades of research on coral-fish relationships to show patterns that individual experiments might miss, focusing on species that maintain close spatial relationships with live coral structures, from obligate coral dwellers like damselfishes and gobies to facultative species like grunts and snappers. The numbers tell a compelling story. The study found that grunt schools foraging away from reefs at night but sheltering near corals during the day increase nitrogen and phosphorus concentrations around their host corals by tenfold. This nutrient boost leads to 75% increases in growth of Acropora cervicornis. In another study spanning 13 months, corals hosting resident damselfish showed approximately 37% greater growth in skeletal surface area compared to fishless corals. We also documented how damselfish swimming movements increase coral photosynthesis by 3-6% during daylight hours by enhancing water flow. Our findings show these relationships are highly context-dependent. In areas with high nitrogen concentrations and high flow, the positive relationship between fish density and coral growth reverses. Beneficial effects observed in small-scale studies don't always scale up to reef-wide surveys, suggesting complex interactions between fish services and environmental conditions. These findings matter because coral reefs face severe threats from climate change, pollution, and overfishing. Understanding fish-coral partnerships could help enhance restoration efforts. If fish truly buffer corals against environmental stressors, protecting these partnerships becomes as important as protecting the corals themselves. The future of coral restoration may depend not just on replanting corals, but on ensuring the right fish communities are there to support them.

## Citation

Stier, Adrian C.; Chase, Tory J.; Osenberg, Craig W. (2025). Fish services to corals: a review of how coral-associated fishes benefit corals. *Coral Reefs*.

[Read the full paper](https://doi.org/10.1007/s00338-025-02647-4)`,
  },
  {
    slug: "coral-guard-crabs-defend-branching-corals-from-starfish-and",
    title: "Coral Guard Crabs Defend Branching Corals From Starfish and Sediment",
    date: "2024-06-15",
    author: "Stier et al.",
    excerpt: "The paper describes coral guard crabs in the family Trapeziidae, small crustaceans that live symbiotically within branching corals in the tropical Pacific Ocean, protecting their hosts from predators and sediment while being completely dependent on the coral for survival.",
    featuredImage: "/images/trapezia-coral-crab-hiding.jpg",
    tags: ["Publication","2024","Symbiosis","Coral","Climate","Predator-Prey"],
    aliases: ["tiny-bodyguard-crabs-take-on-giant-starfish-to-save-coral-re"],
    doiUrl: "https://doi.org/10.1016/j.cub.2023.10.067",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1To0L_2GipgvHlqLfXexs6iY1wzU6Lgf5&usp=drive_fs",
    content: `The paper describes coral guard crabs in the family Trapeziidae, small crustaceans that live symbiotically within branching corals in the tropical Pacific Ocean, protecting their hosts from predators and sediment while being completely dependent on the coral for survival. The review synthesizes existing research on Trapeziid crab-coral mutualisms, examining their defensive behaviors, ecological impacts, and responses to climate change through various field studies and experiments. Trapeziid crabs attack predators much larger than themselves, including crown-of-thorns sea stars and pincushion stars, using their claws to shove and pinch the predators' tube feet. The crabs act as housekeepers, removing sediment from coral surfaces, which is important for coral survival in high-sedimentation areas. Climate change experiments showed increased water temperature caused reductions in crab abundance and egg production, and caused crabs to expel their mates. The crabs create 'halos' of protection around coral colonies, indirectly protecting nearby corals and other reef organisms. These small crabs play an important role in coral reef resilience by protecting corals from predators and sediment damage. As climate change threatens coral reefs, understanding these protective relationships becomes important for conservation efforts, especially since warming waters reduce crab abundance and defensive behavior.

## Citation

Stier, Adrian C.; Osenberg, Craig W. (2024). Coral guard crabs. *Current Biology*.

[Read the full paper](https://doi.org/10.1016/j.cub.2023.10.067)`,
  },
  {
    slug: "how-fish-and-crabs-work-together-to-keep-coral-reefs-healthy",
    title: "How Fish and Crabs Work Together to Keep Coral Reefs Healthy",
    date: "2024-06-15",
    author: "Stier et al.",
    excerpt: "The guide explains how small coral guard crabs (Trapeziidae family) protect their coral hosts from predators and sediment, creating a mutually beneficial relationship that helps maintain coral reef ecosystems.",
    featuredImage: "/images/trapezia-coral-crab-red-spotted.jpg",
    tags: ["Publication","2024","Symbiosis","Coral","Climate","Predator-Prey"],
    aliases: [],
    doiUrl: "https://doi.org/10.1016/j.cub.2024.05.071",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1_ZhkTPhOsBwk9A2eGL-KiRbatUNEx5Fd&usp=drive_fs",
    content: `The guide explains how small coral guard crabs (Trapeziidae family) protect their coral hosts from predators and sediment, creating a mutually beneficial relationship that helps maintain coral reef ecosystems. The review synthesizes existing research on Trapeziid crabs and their relationships with corals, drawing on field observations and experimental studies of crab defensive behaviors and coral survival. Trapeziid crabs actively defend their coral hosts against predators like crown-of-thorns sea stars and corallivorous snails by attacking them with their claws. The crabs also act as housekeepers, removing sediment from coral surfaces that could otherwise kill the colony. When researchers remove crabs from corals in high sedimentation areas, the corals die, but corals with crabs present survive. Climate change experiments show increased water temperature reduces crab abundance and egg production, and causes crabs to expel their mates. Understanding these crab-coral partnerships shows how small organisms can have outsized effects on coral reef resilience, and shows how climate change could disrupt these protective relationships, potentially accelerating coral reef decline.

## Citation

Stier, Adrian C.; Osenberg, Craig W. (2024). How fishes and invertebrates impact coral resilience. *Current Biology*.

[Read the full paper](https://doi.org/10.1016/j.cub.2024.05.071)`,
  },
  {
    slug: "spiny-lobsters-increase-feeding-under-moderate-warming-but-s",
    title: "Spiny Lobsters Increase Feeding Under Moderate Warming but Struggle at High Temperatures",
    date: "2023-01-15",
    author: "Csik et al.",
    excerpt: "Researchers studied how temperature affects both the metabolism and predation rates of California spiny lobsters, finding that lobsters can increase their food consumption faster than their metabolic demands rise, but only within a middle range of temperatures.",
    featuredImage: "/images/spiny-lobsters-group-reef-hideout.jpeg",
    tags: ["Publication","2023","Climate","Predator-Prey"],
    aliases: ["spiny-lobsters-can-handle-some-ocean-warming-but-temperature"],
    doiUrl: "https://doi.org/10.3389/fmars.2023.1072807",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1-cHREoQ0iNe5KmNjBuIkVCkd_ue_TggN&authuser=astier@ucsb.edu&usp=drive_fs",
    content: `Researchers studied how temperature affects both the metabolism and predation rates of California spiny lobsters, finding that lobsters can increase their food consumption faster than their metabolic demands rise, but only within a middle range of temperatures. Researchers acclimated 24 male spiny lobsters to four different temperatures (11, 16, 21, and 26°C) representing their natural range, then measured their oxygen consumption rates using respirometry and their predation rates by offering them mussels to eat. Lobster consumption rates increased faster than their metabolic demands at mid-range temperatures, suggesting they can meet their caloric needs. At the coldest temperature (11°C), lobsters had almost no metabolic activity. At the highest temperature (26°C), 33% of lobsters died during the experiment. Both metabolism and predation rates increased with temperature, but consumption outpaced metabolic demand in the middle temperature range. The research helps predict how California spiny lobsters, both important predators and valuable fishery species, will respond to ocean warming, suggesting they may handle moderate temperature increases but face serious problems at temperature extremes that could shift their geographic range.

## Citation

Csik, Samantha R.; DiFiore, Bartholomew P.; Kraskura, Krista; Hardison, Emily A.; Curtis, Joseph S.; Eliason, Erika J.; Stier, Adrian C. (2023). The metabolic underpinnings of temperature-dependent predation in a key marine predator. *Frontiers in Marine Science*.

[Read the full paper](https://doi.org/10.3389/fmars.2023.1072807)

*This paper is Open Access.*`,
  },
  {
    slug: "underwater-3d-photography-improves-coral-growth-measurements",
    title: "Underwater 3D Photography Improves Coral Growth Measurements",
    date: "2023-01-15",
    author: "Curtis et al.",
    excerpt: "Researchers used underwater 3D photography to measure coral colonies and found it provides more accurate measurements of coral growth and better predictions of which corals harbor the most diverse communities of fish and invertebrates compared to traditional measuring techniques.",
    featuredImage: "/images/cauliflower-coral-damselfish-reef.jpeg",
    tags: ["Publication","2023","Coral","Conservation"],
    aliases: ["underwater-3d-photography-reveals-hidden-patterns-in-coral-g"],
    doiUrl: "https://doi.org/10.1007/s00338-023-02367-7",
    openAccess: false,
    pdfUrl: "https://drive.google.com/file/d/1FHoXPnZ2CGCEzsN6XrIhf87Pd4pYAHvc/view?usp=share_link",
    content: `Researchers used underwater 3D photography to measure coral colonies and found it provides more accurate measurements of coral growth and better predictions of which corals harbor the most diverse communities of fish and invertebrates compared to traditional measuring techniques. Researchers measured 60 Pocillopora coral colonies in Moorea, French Polynesia using both traditional tape measures and 3D photogrammetry. They tracked growth over 105 days and counted the fish and invertebrates living in each colony to see which measurement method better predicted biodiversity. 3D photogrammetry measurements of coral skeletal volume were the best predictors of fish and invertebrate abundance and diversity within coral colonies. Photogrammetric growth measurements were much less variable than manual measurements; skeletal volume measurements had a standard deviation of only 9.99% compared to 23.9% for manual ellipsoid measurements. Over a third of manual growth measurements were negative (13 out of 33 colonies), while only 4 out of 33 photogrammetric measurements and zero skeletal volume measurements were negative. All photogrammetric growth measurements showed the expected positive correlation with initial coral size, while manual measurements showed no correlation. The research shows that 3D photography can improve coral reef monitoring by providing more accurate growth measurements and better predictions of which corals support the most biodiversity. This could help scientists identify the most ecologically valuable coral colonies for conservation efforts and track reef health more precisely as climate change threatens coral ecosystems.

## Citation

Curtis, Joseph S.; Galvan, Journ W.; Primo, Alexander; Osenberg, Craig W.; Stier, Adrian C. (2023). 3D photogrammetry improves measurement of growth and biodiversity patterns in branching corals. *Coral Reefs*.

[Read the full paper](https://doi.org/10.1007/s00338-023-02367-7)`,
  },
  {
    slug: "body-size-variation-drives-changes-in-lobster-urchin-interac",
    title: "Body Size Variation Drives Changes in Lobster-Urchin Interactions",
    date: "2023-01-15",
    author: "DiFiore et al.",
    excerpt: "Researchers studied how variation in body size affects the strength of interactions between lobsters and sea urchins across different spatial and temporal scales.",
    featuredImage: "/images/lobster-in-underwater-trap-cage.jpeg",
    tags: ["Publication","2023","Predator-Prey"],
    aliases: [],
    doiUrl: "https://doi.org/10.1111/1365-2656.13918",
    openAccess: false,
    pdfUrl: "https://drive.google.com/file/d/1K9NuYufF_rB-h6ROnkDEZ86oln9BTbIM/view?usp=share_link",
    content: `Researchers studied how variation in body size affects the strength of interactions between lobsters and sea urchins across different spatial and temporal scales. The researchers examined lobster-urchin interactions to understand how body size influences interaction dynamics. Body size variation drives spatial and temporal variation in lobster-urchin interaction strength. Understanding how body size affects predator-prey interactions helps predict ecosystem dynamics and species interactions in marine environments.

## Citation

DiFiore, Bartholomew P.; Stier, Adrian C. (2023). Variation in body size drives spatial and temporal variation in lobster–urchin interaction strength. *Journal of Animal Ecology*.

[Read the full paper](https://doi.org/10.1111/1365-2656.13918)`,
  },
  {
    slug: "dead-coral-skeletons-can-slow-reef-recovery-by-sheltering-al",
    title: "Dead Coral Skeletons Can Slow Reef Recovery by Sheltering Algae",
    date: "2023-01-15",
    author: "Kopecky et al.",
    excerpt: "Researchers used mathematical modeling to show that dead coral skeletons left behind by some disturbances can make coral reefs more vulnerable to regime shifts from coral-dominated to algae-dominated states by providing shelter for competing algae.",
    featuredImage: "/images/bleach-coral.jpeg",
    tags: ["Publication","2023","Coral"],
    aliases: [],
    doiUrl: "https://doi.org/10.1002/ecy.4006",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1BtbzNUQ6W8m1CT-3Jo6zO9JEydrlDl9e&authuser=astier@ucsb.edu&usp=drive_fs",
    content: `Researchers used mathematical modeling to show that dead coral skeletons left behind by certain types of disturbances can make coral reefs more vulnerable to regime shifts from coral-dominated to algae-dominated states by providing shelter for competing algae. The researchers developed a mathematical model to explore the consequences of structure-removing and structure-retaining disturbances, simulating how the fraction of reef space occupied by key interacting benthic space holders (corals, macroalgae) changes following these two types of disturbance events. Dead coral skeletons substantially diminished coral resilience if they provided macroalgae refuge from herbivory. Material legacies broadened the range of herbivore biomass over which coral and macroalgae states are bistable. Structure-retaining disturbances can move reef systems into regions where coral and macroalgal states become bistable, triggering shifts to algae dominance. The presence of dead skeletons effectively reduces herbivores' capacity to control macroalgae without changing the actual number of herbivores present. The research shows that the type of disturbance matters as much as its intensity for coral reef recovery. As climate change increases both severe storms and marine heatwaves, understanding how different disturbance types affect reef resilience could inform conservation strategies and help predict which reefs are most vulnerable to permanent shifts to algae-dominated states.

## Citation

Kopecky, Kai L.; Stier, Adrian C.; Schmitt, Russell J.; Holbrook, Sally J.; Moeller, Holly V. (2023). Material legacies can degrade resilience: Structure‐retaining disturbances promote regime shifts on coral reefs. *Ecology*.

[Read the full paper](https://doi.org/10.1002/ecy.4006)

*This paper is Open Access.*`,
  },
  {
    slug: "predators-can-help-corals-by-shifting-which-fish-dominate",
    title: "Predators Can Help Corals by Shifting Which Fish Dominate",
    date: "2023-01-15",
    author: "Moeller et al.",
    excerpt: "Researchers used mathematical models to show that predators can sometimes help coral reefs by reducing competitively dominant fish species that provide relatively small benefits to corals, allowing higher-quality mutualist fish to thrive instead.",
    featuredImage: "/images/Hawkf_Tetralia_rubridactyla.jpg",
    tags: ["Publication","2023","Coral","Mutualism","Models","Conservation"],
    aliases: [],
    doiUrl: "https://doi.org/10.1002/ecs2.4382",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?authuser=astier%40ucsb.edu&id=1KjyXlLHc1Zq4DfqZ_7vxhFBtNJsUWmDd&usp=drive_fs",
    content: `Researchers used mathematical models to show that predators can sometimes help coral reefs by eating the wrong fish, specifically by consuming competitively dominant fish species that provide poor benefits to corals, allowing higher-quality mutualist fish to thrive instead. The researchers created a mathematical model inspired by coral reef ecosystems in French Polynesia, focusing on two fish species (hawkfish and damselfish) that live in corals and help them grow by providing nutrients through their waste. They modeled how predation affects the competition between these fish species and the resulting benefits to corals. Predators can have indirect positive effects on coral hosts when they preferentially consume competitively dominant fish that provide lower quality services to corals. In the French Polynesia system they studied, hawkfish are dominant competitors but damselfish cause corals to grow significantly faster. When predation reverses the outcome of competition between mutualist fish, it can enhance overall coral performance. The direction and strength of predator effects depend on asymmetries in mutualist competition, service provision, and predation vulnerability. The research shows that removing predators from coral reefs (through fishing or other disturbances) could have unexpected negative consequences by allowing lower-quality fish mutualists to dominate, potentially reducing coral growth and reef health in an era of widespread coral decline.

## Citation

Moeller, Holly V.; Nisbet, Roger M.; Stier, Adrian C. (2023). Cascading benefits of mutualists' predators on foundation species: A model inspired by coral reef ecosystems. *Ecosphere*.

[Read the full paper](https://doi.org/10.1002/ecs2.4382)

*This paper is Open Access.*`,
  },
  {
    slug: "coral-dwelling-fish-can-promote-growth-but-increase-bleachin",
    title: "Coral-Dwelling Fish Can Promote Growth but Increase Bleaching Risk",
    date: "2022-01-15",
    author: "Detmer et al.",
    excerpt: "Researchers used computer modeling to explore how fish living in coral colonies affect their host corals' ability to survive bleaching events. They found that while fish waste can promote coral growth, it can also make corals more vulnerable to bleaching under certain conditions.",
    featuredImage: "/images/damselfish-pair-pink-coral.jpeg",
    tags: ["Publication","2022","Climate","Symbiosis","Coral"],
    aliases: [],
    doiUrl: "https://doi.org/10.1016/j.jtbi.2022.111087",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1VTeIR-Zv66JOx7UVg7_cYenlwP9zxsoh&authuser=astier@ucsb.edu&usp=drive_fs",
    content: `Researchers used computer modeling to explore how fish living in coral colonies affect their host corals' ability to survive bleaching events. They found that while fish waste can promote coral growth, it can also make corals more vulnerable to bleaching under certain conditions. Researchers modified an existing dynamic energy budget computer model of coral-algae symbiosis to include nitrogen excretion by coral-dwelling fish. They simulated different environmental conditions and stress scenarios to predict how fish presence would affect coral growth and bleaching responses. Fish-derived nitrogen can promote coral growth under normal conditions. Fish excretions support denser symbiont populations that provide protection through self-shading. However, these denser symbionts use more photosynthetic products for their own growth rather than sharing with the coral host. This puts corals at higher risk of becoming carbon-limited and bleaching, with effects depending on environmental conditions. As coral reefs face increasing threats from marine heatwaves and bleaching events, understanding how coral-dwelling fish influence bleaching susceptibility could inform conservation strategies. The research shows that relationships between corals and their fish inhabitants are more complex than previously thought, with potential benefits and risks depending on environmental conditions.

## Citation

Detmer, A. Raine; Cunning, Ross; Pfab, Ferdinand; Brown, Alexandra L.; Stier, Adrian C.; Nisbet, Roger M.; Moeller, Holly V. (2022). Fertilization by coral-dwelling fish promotes coral growth but can exacerbate bleaching response. *Journal of Theoretical Biology*.

[Read the full paper](https://doi.org/10.1016/j.jtbi.2022.111087)

*This paper is Open Access.*`,
  },
  {
    slug: "large-carnivore-recoveries-remain-rare-worldwide",
    title: "Large Carnivore Recoveries Remain Rare Worldwide",
    date: "2022-01-15",
    author: "Ingeman et al.",
    excerpt: "Scientists analyzed 362 large carnivore species worldwide to understand which conservation strategies are associated with recovery, finding that fewer than 10% of populations are recovering and only 12 species have improved their extinction risk status.",
    featuredImage: "/images/CheetahFam-1.jpg",
    tags: ["Publication","2022","Recovery","Conservation"],
    aliases: [],
    doiUrl: "https://doi.org/10.1038/s41598-022-13671-7",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?authuser=astier%40ucsb.edu&id=1j7AncajkDuM-FAtl3yBUhyHUV66xXoo5&usp=drive_fs",
    content: `Our global analysis of 362 large carnivore species shows that fewer than 10% of populations are increasing, with only 12 species showing genuine improvement in extinction risk status. We compiled a database of large carnivores across all vertebrate groups, analyzing IUCN extinction risk status and population trends to identify which conservation actions were linked to recoveries versus ongoing declines. Rather than focusing on failures, we searched for bright spots that might teach how to replicate recoveries elsewhere. The study found that marine mammals emerged as clear winners, showing higher than expected numbers of species with both increasing population trends and genuine status improvements. Humpback whales and Steller sea lions exemplify these large turnarounds. But sharks and rays tell the opposite story, 61% of species are threatened, with only 17% occupying the lowest extinction risk category. Terrestrial mammals also fare poorly, with fully half listed as threatened. We identified just one terrestrial mammal recovery: the Iberian lynx. Our analysis showed striking geographic patterns. The Nearctic region showed significantly higher recovery rates than other regions, while many species in the Afrotropic and Indo-Malay regions continue declining. Our statistical models showed that recovery was associated with species legislation at national and international levels, and with harvest management plans that reduce uncontrolled exploitation. Our findings suggest that the handful of large carnivore recoveries we documented aren't accidents, they're the result of specific, intensive interventions. The challenge now is scaling these strategies globally while addressing the primary threats: habitat modification and human-wildlife conflict. With 38% of large carnivore species currently threatened with extinction, applying these lessons becomes increasingly pressing.

## Citation

Ingeman, Kurt E.; Zhao, Lily Z.; Wolf, Christopher; Williams, David R.; Ritger, Amelia L.; Ripple, William J.; Kopecky, Kai L.; Dillon, Erin M.; DiFiore, Bartholomew P.; Curtis, Joseph S.; Csik, Samantha R.; Bui, An; Stier, Adrian C. (2022). Glimmers of hope in large carnivore recoveries. *Scientific Reports*.

[Read the full paper](https://doi.org/10.1038/s41598-022-13671-7)

*This paper is Open Access.*`,
  },
  {
    slug: "lobster-catches-rose-near-california-marine-reserves-after-a",
    title: "Lobster Catches Rose Near California Marine Reserves After a Decade",
    date: "2022-01-15",
    author: "Lenihan et al.",
    excerpt: "Researchers compared spiny lobster populations around California marine reserves after 10 years of protection and found that reserves not only boosted lobster numbers inside by up to 465%, but also substantially increased catches for fishers working just outside reserve boundaries.",
    featuredImage: "/images/lobster.jpeg",
    tags: ["Publication","2022","Management"],
    aliases: ["marine-reserves-pay-off-california-lobster-catches-surge-400"],
    doiUrl: "https://doi.org/10.1002/ecs2.4110",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1h6m52Nzym0PJTG4kTdYVUMMIwVWS5lip&usp=drive_fs",
    content: `Researchers compared spiny lobster populations around California marine reserves after 10 years of protection and found that reserves not only boosted lobster numbers inside by up to 465%, but also substantially increased catches for fishers working just outside reserve boundaries. Researchers repeated a scientific trapping study from 2008, placing scientific traps along gradients from deep inside two Channel Islands marine reserves to reference sites far outside the boundaries, comparing catch rates and lobster biomass after 10 additional years of protection. Legal-sized lobster abundance in traps increased by 125%-465% deep inside reserves over the 10-year period. Catch rates increased by 223%-331% at sites near reserve borders and by nearly 400% just outside reserve borders. Similar large increases were observed in total lobster biomass caught in traps at both study reserves. The spillover effect grew substantially stronger over time as lobster populations built up inside the protected areas. The research provides rare long-term evidence that marine reserves can deliver on their promise to benefit fisheries, showing that short-term costs to fishers can turn into substantial long-term gains as protected populations rebuild and spill over into fishing areas.

## Citation

Lenihan, Hunter S.; Fitzgerald, Sean P.; Reed, Daniel C.; Hofmeister, Jennifer K. K.; Stier, Adrian C. (2022). Increasing spillover enhances southern California spiny lobster catch along marine reserve borders. *Ecosphere*.

[Read the full paper](https://doi.org/10.1002/ecs2.4110)

*This paper is Open Access.*`,
  },
  {
    slug: "kelp-forest-collapse-depends-on-urchin-grazing-and-kelp-supp",
    title: "Kelp Forest Collapse Depends on Urchin Grazing and Kelp Supply",
    date: "2022-01-15",
    author: "Rennick et al.",
    excerpt: "Scientists discovered that sea urchins cause severe kelp forest collapse when their grazing overwhelms kelp production, but kelp detritus (dead kelp pieces) can prevent this collapse by feeding urchins and reducing their appetite for living kelp.",
    featuredImage: "/images/kelp_canopy.jpg",
    tags: ["Publication","2022","Conservation","Kelp"],
    aliases: ["scientists-crack-the-code-of-when-sea-urchins-destroy-kelp-f"],
    doiUrl: "https://doi.org/10.1002/ecy.3673",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?authuser=astier%40ucsb.edu&id=1aV60WNbrmwNzmBe1ImLu0_LzXxh6MW5I&usp=drive_fs",
    content: `Scientists discovered that sea urchins cause severe kelp forest collapse when their grazing overwhelms kelp production, but kelp detritus (dead kelp pieces) can prevent this collapse by feeding urchins and reducing their appetite for living kelp. Researchers conducted laboratory feeding experiments with different densities of sea urchins, then combined those results with 21 years of kelp forest monitoring data from the Santa Barbara Channel to predict when urchin grazing would exceed kelp production. When urchin grazing capacity exceeded kelp production, sea urchins caused a 50-fold reduction in giant kelp biomass. The balance between herbivory and production determines when kelp forests collapse into urchin barrens. Detrital kelp supply suppresses deforestation by providing alternative food for urchins. Urchin foraging rates vary predictably with urchin biomass, allowing scientists to forecast ecosystem collapse. The research provides a mechanistic understanding of kelp forest collapse, helping scientists predict when and where these productive ecosystems might shift to low-diversity urchin barrens that persist for decades and provide fewer services to people and nature.

## Citation

Rennick, Mae; DiFiore, Bartholomew P.; Curtis, Joseph; Reed, Daniel C.; Stier, Adrian C. (2022). Detrital supply suppresses deforestation to maintain healthy kelp forest ecosystems. *Ecology*.

[Read the full paper](https://doi.org/10.1002/ecy.3673)

*This paper is Open Access.*`,
  },
  {
    slug: "urbanization-affects-freshwater-and-coastal-marine-biodivers",
    title: "Urbanization Affects Freshwater and Coastal Marine Biodiversity Differently",
    date: "2022-01-15",
    author: "Samhouri et al.",
    excerpt: "Researchers studied how urbanization affects marine and freshwater ecosystems by comparing biodiversity and ecosystem functions across six pairs of urban and less-urban watersheds in Puget Sound, Washington. Surprisingly, they found that while freshwater biodiversity declined with urbanization, coastal marine biodiversity increased.",
    featuredImage: "/images/seattle-urban-coastline.jpeg",
    tags: ["Publication","2022","Conservation"],
    aliases: ["urban-sprawl-has-surprising-effect-on-marine-life-in-pacific"],
    doiUrl: "https://doi.org/10.3389/fmars.2022.931319",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1lt_EPPWaTVwVbhUY3xkb57SRm4ciYamb&usp=drive_fs",
    content: `Researchers studied how urbanization affects marine and freshwater ecosystems by comparing biodiversity and ecosystem functions across six pairs of urban and less-urban watersheds in Puget Sound, Washington. Surprisingly, they found that while freshwater biodiversity declined with urbanization, coastal marine biodiversity increased. Researchers compared six pairs of more and less urbanized coastal watersheds in Puget Sound, measuring biodiversity of bottom-dwelling invertebrates and ecosystem functions like primary productivity and decomposition in both freshwater and marine sites using statistical analyses including principal components analysis and analysis of covariance. Greater upland urbanization was associated with reduced freshwater biodiversity, measured as density and evenness of epibenthic invertebrate families. Coastal marine biodiversity tended to be higher at more urbanized sites, suggesting low to moderate urbanization-related disturbance may increase marine diversity. No statistical association was found between urbanization and ecosystem functions in either freshwater or coastal marine habitats. There was no evidence that urbanization effects were more severe in freshwater than coastal marine habitats, contrary to expectations. The research challenges assumptions about how urbanization affects connected ecosystems and has consequences for Pacific salmon conservation, as these endangered species depend on both freshwater and marine habitats during their life cycles. The findings suggest that ecosystem-based management must consider terrestrial, freshwater, and coastal marine systems together.

## Citation

Samhouri, Jameal F.; Shelton, Andrew Olaf; Williams, Gregory D.; Feist, Blake E.; Hennessey, Shannon M.; Bartz, Krista; Kelly, Ryan P.; O’Donnell, James L.; Sheer, Mindi; Stier, Adrian C.; Levin, Phillip S. (2022). How much city is too much city? Biodiversity and ecosystem functioning along an urban gradient at the interface of land and sea. *Frontiers in Marine Science*.

[Read the full paper](https://doi.org/10.3389/fmars.2022.931319)

*This paper is Open Access.*`,
  },
  {
    slug: "north-sea-food-web-shows-long-term-signs-of-regime-shift",
    title: "North Sea Food Web Shows Long-Term Signs of Regime Shift",
    date: "2022-01-15",
    author: "Sguotti et al.",
    excerpt: "Scientists analyzed 40 years of data from the North Sea ecosystem and discovered that fishing and warming have caused an irreversible regime shift, meaning the ecosystem has fundamentally changed and cannot return to its previous state even if pressures are reduced.",
    featuredImage: "/images/norht-sea-fishing.jpeg",
    tags: ["Publication","2022"],
    aliases: ["north-sea-ecosystem-has-crossed-a-point-of-no-return-scienti"],
    doiUrl: "https://doi.org/10.3389/fmars.2022.945204",
    openAccess: true,
    pdfUrl: "",
    content: `Our analysis of 40 years of data from the North Sea shows something unsettling: this heavily fished and rapidly warming ecosystem has crossed a threshold and fundamentally reorganized itself in ways that appear irreversible. The study found evidence of a previously undetected regime shift that challenges how we think about ocean recovery. We wanted to answer a deceptively simple question: when marine ecosystems undergo large changes, can they bounce back? The North Sea is one of the most heavily human impacted marine areas in the world, experiencing both intensive fishing pressure and rapid warming. We assembled 40 years of data covering everything from plankton to commercially important fish species, then applied catastrophe theory and stochastic cusp modeling to detect regime shifts and test whether they showed hysteresis, the technical term for irreversibility. Our findings were stark. The North Sea ecosystem had experienced a regime shift driven by the combined effects of fishing and warming, and this shift appeared irreversible. Previous studies had documented ecosystem changes in the 1980s and 1990s, but they focused on subsets like plankton or fish populations and used methods that couldn't quantify hysteresis. This analysis showed that the ecosystem as a whole had crossed a tipping point and settled into a new stable state. What the study found most concerning was the lack of any clear path back. While reducing fishing pressure might help increase yields of currently exploited species, simply removing fishing pressure is unlikely to reverse the regime shift because other feedbacks now maintain the new state. These feedbacks stabilize the new regime through the creation of new interactions among species, new energy pathways, and new system structures. This matters because it changes how we think about marine conservation and management. If ecosystems can cross points of no return, then preventing regime shifts becomes more important than trying to reverse them. Since climate change cannot currently be reversed and can only be mitigated, the new regime in which the North Sea now resides appears permanent.

## Citation

Sguotti, Camilla; Blöcker, Alexandra M.; Färber, Leonie; Blanz, Benjamin; Cormier, Roland; Diekmann, Rabea; Letschert, Jonas; Rambo, Henrike; Stollberg, Nicole; Stelzenmüller, Vanessa; Stier, Adrian C.; Möllmann, Christian (2022). Irreversibility of regime shifts in the North Sea. *Frontiers in Marine Science*.

[Read the full paper](https://doi.org/10.3389/fmars.2022.945204)

*This paper is Open Access.*`,
  },
  {
    slug: "monitoring-becomes-more-valuable-as-populations-near-collaps",
    title: "Monitoring Becomes More Valuable as Populations Near Collapse",
    date: "2022-01-15",
    author: "Stier et al.",
    excerpt: "Researchers used computer simulations to show that more precise monitoring of harvested natural resources becomes increasingly valuable when populations approach critical collapse thresholds, and that adaptive monitoring strategies could help prevent irreversible population crashes.",
    featuredImage: "/images/rocky-beach-cove-panorama.jpeg",
    tags: ["Publication","2022"],
    aliases: ["when-to-watch-closer-new-study-shows-monitoring-becomes-more"],
    doiUrl: "https://doi.org/10.1098/rspb.2022.0526",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1h8LwgdQKDdLfnKotlaIDcY5SU2rQ6E4A&usp=drive_fs",
    content: `We addressed a major challenge in sustainability science: identifying targets that maximize ecosystem benefits to humanity while minimizing the risk of crossing critical system thresholds. Researchers led by Adrian Stier at UC Santa Barbara tackled a deceptively simple question: how much monitoring is enough? In natural resource management, high-precision monitoring costs serious money, requires analysis of large datasets, and can delay decision-making. But insufficient monitoring risks missing warning signs before populations crash past important thresholds. We built a closed-loop management strategy evaluation, essentially a virtual laboratory where they could harvest populations over 50-year periods and observe outcomes under different monitoring scenarios. We ran 10,000 replicate simulations, testing how monitoring precision affected both the risk of population collapse and the economic value managers could extract. They focused on populations with critical biological thresholds, points where population growth rates become negative, leading to what scientists call depensation. Our results showed a clear pattern: the value of monitoring information increases as populations spend more time near critical collapse thresholds. This benefit emerged because higher monitoring precision promoted both higher sustainable yield and greater capacity for populations to recover from overharvest. When populations were safely above their danger zones, basic monitoring worked adequately. But as they approached important thresholds, precise monitoring became exponentially more valuable. Our findings suggest that precautionary buffers triggering increased monitoring precision as resource levels decline may offer a way to minimize monitoring costs while maximizing profits. This study provides a framework for making tough decisions about monitoring investments, with implications extending beyond fisheries to any harvested resource, from wildlife to forests, where important thresholds might exist. However, significant challenges remain. Scientists still struggle to identify where important thresholds exist in real populations, or to predict how environmental changes might shift their locations. The computer simulations provided a clean proof of concept, but the harder work lies ahead in seeing whether these insights can prevent real-world collapses.

## Citation

Stier, Adrian C.; Essington, Timothy E.; Samhouri, Jameal F.; Siple, Margaret C.; Halpern, Benjamin S.; White, Crow; Lynham, John M.; Salomon, Anne K.; Levin, Phillip S. (2022). Avoiding critical thresholds through effective monitoring. *Proceedings of the Royal Society B: Biological Sciences*.

[Read the full paper](https://doi.org/10.1098/rspb.2022.0526)

*This paper is Open Access.*`,
  },
  {
    slug: "remote-coral-reefs-are-also-vulnerable-to-climate-change",
    title: "Remote Coral Reefs Are Also Vulnerable to Climate Change",
    date: "2022-01-15",
    author: "Baumann et al.",
    excerpt: "Researchers tested whether remote coral reefs are more resilient to climate change than those near human populations. Surprisingly, they found no relationship between isolation and resistance to disturbance, and some evidence that reefs near developed areas may recover faster.",
    featuredImage: "/images/tropical-island-split-view-coral-reef-shark.jpeg",
    tags: ["Publication","2022","Coral","Climate","Conservation"],
    aliases: ["remote-coral-reefs-no-safer-from-climate-change-than-those-n"],
    doiUrl: "https://doi.org/10.1111/gcb.15904",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?authuser=astier%40ucsb.edu&id=1D46ynLQw4LAcMqAtk86PalpNZ70ytJLE&usp=drive_fs",
    content: `We tested an intuitive idea: coral reefs far from human civilization should be better protected from our influence. But when researchers led by Justin Baumann, working with Lily Zhao, Adrian Stier, and John Bruno, tested this assumption, they found something surprising. We analyzed the relationship between local human influence and coral community resilience across reefs worldwide. They measured both resistance to disturbance and recovery rates following bleaching, disease, storms, and predator outbreaks. The results challenged a fundamental assumption in coral conservation. Remote coral reefs showed no enhanced resilience compared to those near human populations. In fact, some evidence suggested reefs in more developed areas recovered from disturbances faster than their isolated counterparts. The study found no relationship between human influence and resistance to disturbance. These findings have substantial implications for coral conservation strategy. Remote reefs have often been viewed as potential biodiversity arks, places where coral communities might survive as climate change devastates more accessible areas. This study suggests that assumption is flawed. Remote reefs are just as vulnerable to the global threat of climate change as reefs anywhere else. The silver lining in these findings is that some reefs close to large human populations demonstrated relative resilience. This suggests that focusing research and conservation resources on more accessible locations may maximize conservation outcomes rather than investing heavily in protecting distant, isolated reefs. Ultimately, the study delivers a sobering message: there is no hiding from climate change. Geographic isolation cannot protect coral reefs from warming oceans and acidification. Only drastic and rapid cuts in greenhouse gas emissions will ensure coral survival worldwide.

## Citation

Baumann, Justin H.; Zhao, Lily Z.; Stier, Adrian C.; Bruno, John F. (2022). Remoteness does not enhance coral reef resilience. *Global Change Biology*.

[Read the full paper](https://doi.org/10.1111/gcb.15904)

*This paper is Open Access.*`,
  },
  {
    slug: "storm-disturbance-can-reshape-kelp-forest-communities",
    title: "Storm Disturbance Can Reshape Kelp Forest Communities",
    date: "2021-01-15",
    author: "Detmer et al.",
    excerpt: "Researchers developed a mathematical model to understand how storm intensity affects giant kelp forests and the underwater communities that depend on them, finding that severe storms lead to more understory algae and fewer sessile animals on the seafloor.",
    featuredImage: "/images/kelp-hero.jpeg",
    tags: ["Publication","2021","Models","Kelp"],
    aliases: ["mathematical-model-reveals-how-ocean-storms-reshape-entire-k"],
    doiUrl: "https://doi.org/10.1002/ecy.3304",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1AQU-MIiBqn99T_U8GGIBX3Nb8KBG6-Xk&usp=drive_fs",
    content: `Researchers developed a mathematical model to understand how storm intensity affects giant kelp forests and the underwater communities that depend on them, finding that severe storms lead to more understory algae and fewer sessile animals on the seafloor. The researchers built a mathematical model that simulates giant kelp population dynamics through different storm scenarios, then tracked how changes in kelp abundance affected competition between understory algae and sessile invertebrates for space on the seafloor. They validated their model predictions against 20 years of real community data from California kelp forests. Severe storm regimes resulted in greater abundance of understory macroalgae and lower abundance of sessile invertebrates compared to milder storm regimes. Both the cascading effects of giant kelp loss and direct storm scouring of the benthos influenced competition outcomes between community members. The model's qualitative predictions were consistent with empirical data from a 20-year time series of community dynamics. Dense kelp canopies can reduce light reaching the benthic community by up to 90%. The research shows how variations in storm disturbance regimes can fundamentally alter kelp forest ecosystems by shifting which organisms dominate the seafloor. Understanding these cascading effects through foundation species is important for predicting how changing disturbance patterns may impact marine community structure.

## Citation

Detmer, A. Raine; Miller, Robert J.; Reed, Daniel C.; Bell, Tom W.; Stier, Adrian C.; Moeller, Holly V. (2021). Variation in disturbance to a foundation species structures the dynamics of a benthic reef community. *Ecology*.

[Read the full paper](https://doi.org/10.1002/ecy.3304)`,
  },
  {
    slug: "island-size-and-isolation-shape-food-web-structure",
    title: "Island Size and Isolation Shape Food-Web Structure",
    date: "2021-01-15",
    author: "Holt et al.",
    excerpt: "This paper develops theoretical models to understand how food web structure; the feeding relationships between species at different trophic levels; influences species-area relationships on islands and isolated habitats.",
    featuredImage: "/images/forested-islands-aerial-ocean-view.JPG",
    tags: ["Publication","2021","Conservation"],
    aliases: ["why-big-islands-feed-more-predators-new-theory-links-food-we"],
    doiUrl: "https://doi.org/10.1017/9781108569422.017",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1ZMBdWT7AmosWZ_fLywSaKhW4oFVcA5DP&usp=drive_fs",
    content: `Our theoretical models show how food web structure influences species-area relationships on islands and isolated habitats. We built mathematical models based on neutral theory and food web dynamics to predict how species richness at different trophic levels should vary with habitat area, testing scenarios from simple food chains to complex webs. The study found a clear pattern: species at higher trophic levels consistently showed steeper species-area relationships than those below them. When we modeled food chains with specialized predator-prey relationships, this effect became even more pronounced, the species-area relationship became progressively steeper moving up each level of the food chain. Our mathematics showed that predators, being less abundant and more dependent on their prey, are disproportionately affected by area loss. What the study found most robust was how consistent this pattern remained across different model assumptions. Even when relaxing strict neutral assumptions and allowing species to interact in more realistic ways, the fundamental pattern held. Systems with generalist predators that can feed on multiple prey species show different area-scaling patterns than specialist-dominated systems. This work matters because most conservation strategies focus on protecting individual species rather than entire food webs. Our models suggest that habitat fragmentation hits top predators hardest, not just because they're naturally rare, but because of fundamental mathematical relationships governing how trophic interactions scale with space. Understanding how food web interactions scale with area could help predict which species are most vulnerable to habitat fragmentation and guide conservation strategies for maintaining entire ecological communities, not just individual species.

## Citation

Holt, Robert D.; Gravel, Dominique; Stier, Adrian; Rosindell, James (2021). On the Interface of Food Webs and Spatial Ecology: The Trophic Dimension of Species–Area Relationships. **.

[Read the full paper](https://doi.org/10.1017/9781108569422.017)`,
  },
  {
    slug: "predator-dilution-can-fail-for-young-corals",
    title: "Predator Dilution Can Fail for Young Corals",
    date: "2021-01-15",
    author: "Kopecky et al.",
    excerpt: "Researchers studied how coral colony density and predation by fish affect the growth and survival of small staghorn corals, finding that predators devastate young corals regardless of how crowded they are together.",
    featuredImage: "/images/butterflyfish-eating-coral.jpeg",
    tags: ["Publication","2021","Coral","Conservation"],
    aliases: ["safety-in-numbers-doesn-t-work-for-baby-corals-under-attack"],
    doiUrl: "https://doi.org/10.1007/s00338-021-02076-z",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=15I51j8vgjIGNoo_GjOEUuH9eglDxOqgz&usp=drive_fs",
    content: `Researchers studied how coral colony density and predation by fish affect the growth and survival of small staghorn corals, finding that predators devastate young corals regardless of how crowded they are together. Scientists placed small staghorn coral pieces at three different densities (single corals, 4 corals per platform, and 8 corals per platform) on patch reefs in Moorea, French Polynesia. Half were protected in mesh cages to exclude corallivorous fish, half were left exposed. They tracked growth and survival over 30 days and one year. Corallivorous fish caused high mortality in exposed corals after 30 days, while all protected corals survived with no damage. Coral density had no effect on predation rates; fish attacked corals equally whether they were alone or in groups. Protected corals showed large growth over one year. When protected from predators, corals grew faster when they had neighbors compared to when they were alone. The research shows that young staghorn corals face severe predation pressure regardless of how densely they're packed together, suggesting that predator control rather than coral spacing may be important for reef recovery. It challenges the idea that grouping corals together provides safety in numbers.

## Citation

Kopecky, Kai L.; Cook, Dana T.; Schmitt, Russell J.; Stier, Adrian C. (2021). Effects of corallivory and coral colony density on coral growth and survival. *Coral Reefs*.

[Read the full paper](https://doi.org/10.1007/s00338-021-02076-z)

*This paper is Open Access.*`,
  },
  {
    slug: "california-marine-protected-areas-increased-lobster-catch-ne",
    title: "California Marine Protected Areas Increased Lobster Catch Near Reserve Boundaries",
    date: "2021-01-15",
    author: "Lenihan et al.",
    excerpt: "This study examined whether Marine Protected Areas (MPAs) established in 2012 along California's coast benefit the local spiny lobster fishery through spillover, where lobsters move from protected areas into fishing zones.",
    featuredImage: "/images/california-coastline-rocky-shore.jpg",
    tags: ["Publication","2021","Management","Conservation"],
    aliases: ["california-s-ocean-reserves-deliver-fishing-bonanza-tripling"],
    doiUrl: "https://doi.org/10.1038/s41598-021-82371-5",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1JGQfehS-RGz_IsffmgDAdaPC3xy22OrG&usp=drive_fs",
    content: `This study examined whether Marine Protected Areas (MPAs) established in 2012 along California's coast benefit the local spiny lobster fishery through spillover, where lobsters move from protected areas into fishing zones. Researchers compared lobster populations inside and outside two new MPAs using diver surveys, and analyzed fishing data (catch, effort, catch-per-unit-effort) from commercial fishing blocks with and without MPAs for 6 years before and after MPA establishment in 2012. Lobster density increased three times faster inside MPAs compared to fished areas over 6 years. Total lobster catch increased 225% in the fishing block containing MPAs despite a 35% reduction in fishable area. Fishing effort more than doubled in the MPA-containing block, but catch-per-unit-effort remained unchanged. Regional lobster catch increased 57% while fishing effort increased 73% across all study areas. This provides rare quantitative evidence that Marine Protected Areas can deliver on promises to enhance fisheries, not just conservation. That matters for gaining fisher support and demonstrating that protecting ocean areas can benefit both wildlife and fishing communities.

## Citation

Lenihan, Hunter S.; Gallagher, Jordan P.; Peters, Joseph R.; Stier, Adrian C.; Hofmeister, Jennifer K. K.; Reed, Daniel C. (2021). Evidence that spillover from Marine Protected Areas benefits the spiny lobster (Panulirus interruptus) fishery in southern California. *Scientific Reports*.

[Read the full paper](https://doi.org/10.1038/s41598-021-82371-5)

*This paper is Open Access.*`,
  },
  {
    slug: "conservation-conflicts-can-reflect-multiple-valid-perspectiv",
    title: "Conservation Conflicts Can Reflect Multiple Valid Perspectives",
    date: "2021-01-15",
    author: "Levin et al.",
    excerpt: "This study asks how differences in perception, not just differences in values, drive conflicts in conservation and resource management. Named after the Kurosawa film, the 'Rashomon effect' describes how different observers can have plausible but conflicting interpretations of the same events.",
    featuredImage: "/images/conflict-image.jpg",
    tags: ["Publication","2021","Conservation"],
    aliases: ["why-scientists-can-t-solve-conservation-conflicts-the-rashom"],
    doiUrl: "https://doi.org/10.1093/biosci/biaa117",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1iOnkG-A1jkIuBSybyqtSBzEZgXho9GKG&usp=drive_fs",
    content: `We examined why stakeholders fight over natural resources, finding that conflicts often stem from differences in how they perceive the system rather than competing values alone. But what if people looking at the same facts simply see different realities? Researchers led by Phillip Levin, working with Steven Gray, Christian Möllmann, and Adrian Stier, explored this phenomenon and named it after Akira Kurosawa's legendary 1950 film Rashomon. In the film, four witnesses give contradictory accounts of a crime in a forest. Each account is internally coherent and plausible, yet they cannot all be true. We argue that conservation conflicts often follow the same pattern. Different stakeholders observe the same ecosystem, have access to the same data, yet arrive at fundamentally different conclusions about what is happening and what should be done. The paper identifies three conditions that create a conservation Rashomon effect: differences in perspective based on social and cultural background, multiple plausible interpretations of the available evidence, and insufficient data to definitively improve one interpretation above others. When all three conditions are present, conflict becomes almost inevitable. Policymakers often turn to scientists as neutral honest brokers who can cut through disagreements by providing objective facts. But we challenge this assumption. Scientists themselves bring perspectives shaped by their training, institutional incentives, and personal experiences. Two equally qualified scientists studying the same system can reach different conclusions, both supported by legitimate evidence. Rather than seeking an impossible objectivity, we suggest embracing epistemic pluralism, acknowledging that multiple valid ways of knowing exist. Effective resource management may require not finding the one right answer, but creating inclusive processes that acknowledge uncertainty and incorporate diverse perspectives. This framework has practical implications for anyone involved in environmental disputes. Instead of assuming opponents are ignorant or acting in bad faith, we might recognize that they genuinely perceive the situation differently. Building understanding across these perceptual divides may be more productive than endless battles over whose facts are correct.

## Citation

Levin, Phillip S; Gray, Steven A; Möllmann, Christian; Stier, Adrian C (2021). Perception and Conflict in Conservation: The Rashomon Effect. *BioScience*.

[Read the full paper](https://doi.org/10.1093/biosci/biaa117)`,
  },
  {
    slug: "native-predators-outnumber-invasive-lionfish-in-caribbean-pa",
    title: "Native Predators Outnumber Invasive Lionfish in Caribbean Panama Waters",
    date: "2021-01-15",
    author: "Samhouri et al.",
    excerpt: "Scientists studying lionfish invasion in Caribbean Panama found that native fish predators are more abundant than the invasive lionfish, and that lionfish don't have worse impacts on prey fish than native predators do.",
    featuredImage: "/images/lionfish-soft-coral.jpeg",
    tags: ["Publication","2021","Predator-Prey","Coral","Management"],
    aliases: ["native-fish-vastly-outnumber-invasive-lionfish-in-caribbean-"],
    doiUrl: "https://doi.org/10.1007/s00338-021-02132-8",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1DOXpn6YWBxrGjDXRZr1x7M9uOv79TgXP&usp=drive_fs",
    content: `Scientists studying lionfish invasion in Caribbean Panama found that native fish predators are more abundant than the invasive lionfish, and that lionfish don't have worse impacts on prey fish than native predators do. The researchers conducted underwater surveys counting fish on 24 patch reefs and timed swimming surveys in Panama, then ran laboratory experiments comparing how lionfish versus native graysby fish affected survival of masked gobies. They also analyzed citizen science data from across the Caribbean. Native mesopredators were much more common on patch reefs than lionfish and were 30-40 times more abundant during timed surveys. Lionfish and native graysby had similar impacts on masked goby survival and size selection in laboratory experiments. Analysis of citizen science data across eight Caribbean regions showed graysby were more abundant than lionfish. The impacts of this invasive species may be less severe than expected due to low abundance relative to native predators. The research suggests that lionfish management efforts may be succeeding in some regions, and that conservation strategies should consider local ecological context rather than assuming all invasive species have uniformly severe impacts. It supports more specific approaches to invasive species management that account for regional differences.

## Citation

Samhouri, Jameal F.; Stier, Adrian C. (2021). Ecological impacts of an invasive mesopredator do not differ from those of a native mesopredator: lionfish in Caribbean Panama. *Coral Reefs*.

[Read the full paper](https://doi.org/10.1007/s00338-021-02132-8)

*This paper is Open Access.*`,
  },
  {
    slug: "parrotfish-grazing-varies-across-caribbean-reefs",
    title: "Parrotfish Grazing Varies Across Caribbean Reefs",
    date: "2021-01-15",
    author: "Wilson et al.",
    excerpt: "Researchers studied how parrotfish grazing behavior varies across different Caribbean reef sites, finding that the same fish species feed at substantially different rates depending on where they live, which could affect how well reefs recover from damage.",
    featuredImage: "/images/parrotfish.jpeg",
    tags: ["Publication","2021","Coral","Conservation","Management"],
    aliases: ["same-fish-different-appetites-parrotfish-behavior-varies-dra"],
    doiUrl: "https://doi.org/10.1007/s00227-021-03844-9",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1A9mev7M8cI1PhYV-daLPqISci8eVQY-b&usp=drive_fs",
    content: `Researchers studied how parrotfish grazing behavior varies across different Caribbean reef sites, finding that the same fish species feed at substantially different rates depending on where they live, which could affect how well reefs recover from damage. The team followed individual parrotfish underwater for 2-minute periods across 13 reef sites in Bonaire, Antigua, and Barbuda, recording how often they bit, how long they spent feeding, and how intensively they grazed, while also measuring reef characteristics like coral cover and fish populations. The same parrotfish species showed significant differences in feeding rates, time spent grazing, and grazing intensity across different reef sites. These behavioral variations could alter the ecological impact of parrotfish populations even when biomass remains constant. Current management approaches that assume consistent grazing behavior across reef systems may be inadequate. The findings suggest that herbivore biomass alone may be an incomplete metric for predicting reef health outcomes. The research challenges current reef management strategies that set herbivore biomass targets assuming fish behavior is consistent everywhere. If parrotfish graze less intensively on degraded reefs, managers may need higher fish populations to achieve the same algae control, and simple biomass targets may fail to protect coral reefs effectively.

## Citation

Wilson, Margaret W.; Gaines, Steven D.; Stier, Adrian C.; Halpern, Benjamin S. (2021). Variation in herbivore grazing behavior across Caribbean reef sites. *Marine Biology*.

[Read the full paper](https://doi.org/10.1007/s00227-021-03844-9)

*This paper is Open Access.*`,
  },
  {
    slug: "a-teal-carbon-framework-connects-land-and-sea-climate-mitiga",
    title: "A Teal Carbon Framework Connects Land and Sea Climate Mitigation",
    date: "2020-01-15",
    author: "Dundas et al.",
    excerpt: "This paper argues that climate policies like the Green New Deal should integrate ocean-based solutions with terrestrial approaches, creating what the authors call a 'Teal Deal' that combines land and sea strategies for renewable energy, transportation, food security, and habitat restoration.",
    featuredImage: "/images/offshore-wind-farm.jpeg",
    tags: ["Publication","2020","Climate","Conservation"],
    aliases: ["scientists-propose-teal-deal-to-combine-land-and-sea-climate"],
    doiUrl: "https://doi.org/10.1111/conl.12716",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1HOprjkpdM2JMnZ9k_YpqJYdk7bGYNl_v&usp=drive_fs",
    content: `This paper argues that climate policies like the Green New Deal should integrate ocean-based solutions with terrestrial approaches, creating what the authors call a 'Teal Deal' that combines land and sea strategies for renewable energy, transportation, food security, and habitat restoration. The researchers conducted a policy analysis and literature review to identify four key sectors where ocean and terrestrial climate solutions could be integrated: renewable energy, transportation, food security, and habitat restoration. They analyzed existing policy frameworks and proposed specific ocean-based approaches that complement terrestrial strategies. Offshore winds blow harder and more consistently than on land, with potential to tap more than 100 GW of untapped offshore wind resources in U.S. Federal waters. Wind strength peaks in the afternoon and evening when solar energy declines but electricity demand is highest, making offshore wind complementary to solar power. European offshore wind farms generated 18.5 GW of clean power in 2018 and supported as many as 130,000 full-time equivalent jobs per year. Offshore energy development in the U.S. currently intersects nine different domestic policies, creating bureaucratic obstacles that need streamlining. The research provides a policy framework for addressing climate change more fully by using terrestrial and ocean resources together. It could help policymakers create more effective climate strategies that reduce risk through diversification while maximizing economic benefits and carbon reduction goals.

## Citation

Dundas, Steven J.; Levine, Arielle S.; Lewison, Rebecca L.; Doerr, Angee N.; White, Crow; Galloway, Aaron W. E.; Garza, Corey; Hazen, Elliott L.; Padilla‐Gamiño, Jacqueline; Samhouri, Jameal F.; Spalding, Ana; Stier, Adrian; White, J. Wilson (2020). Integrating oceans into climate policy: Any green new deal needs a splash of blue. *Conservation Letters*.

[Read the full paper](https://doi.org/10.1111/conl.12716)

*This paper is Open Access.*`,
  },
  {
    slug: "giant-kelp-stabilizes-coastal-communities-through-biodiversi",
    title: "Giant Kelp Stabilizes Coastal Communities Through Biodiversity",
    date: "2020-01-15",
    author: "Lamy et al.",
    excerpt: "Researchers studied 18 years of data from California kelp forests to understand how the stability of giant kelp affects the stability of the diverse community living beneath it. They found that when giant kelp populations are stable, the understory communities are also more stable, primarily because stable kelp supports higher species diversity.",
    featuredImage: "/images/giant-kelp-sunlight-underwater.jpeg",
    tags: ["Publication","2020","Kelp"],
    aliases: ["giant-kelp-acts-as-ecosystem-stabilizer-through-biodiversity"],
    doiUrl: "https://doi.org/10.1002/ecy.2987",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=19RVogu8m9SGTr4DzsUjx72WPab0p-gQN&usp=drive_fs",
    content: `Researchers studied 18 years of data from California kelp forests to understand how the stability of giant kelp affects the stability of the diverse community living beneath it. They found that when giant kelp populations are stable, the understory communities are also more stable, primarily because stable kelp supports higher species diversity. Researchers analyzed 18 years of biomass data from 32 plots across 9 rocky reef sites in the Santa Barbara Channel, measuring giant kelp and 114 species of understory algae and sessile invertebrates. They calculated stability as the inverse of variability over time and used mathematical frameworks to understand how species richness, individual species stability, and species asynchrony contribute to overall community stability. The stability of understory communities was positively and indirectly related to giant kelp stability, primarily through kelp's direct positive association with species richness. Community stability was positively related to species richness via increased species stability and species asynchrony. The stabilizing effects of richness were three to four times stronger when algae and invertebrates were considered separately rather than in combination. Competition for shared resources played a more important role in stabilizing the community than differential responses to environmental conditions. The research provides important evidence for how foundation species like giant kelp stabilize entire ecosystems through biodiversity. With increasing threats to structure-forming foundation species worldwide due to climate change and human impacts, understanding these relationships is essential for predicting ecosystem responses and developing conservation strategies for kelp forests.

## Citation

Lamy, Thomas; Koenigs, Craig; Holbrook, Sally J.; Miller, Robert J.; Stier, Adrian C.; Reed, Daniel C. (2020). Foundation species promote community stability by increasing diversity in a giant kelp forest. *Ecology*.

[Read the full paper](https://doi.org/10.1002/ecy.2987)`,
  },
  {
    slug: "local-fish-population-collapses-can-slip-past-regional-manag",
    title: "Local Fish Population Collapses Can Slip Past Regional Management",
    date: "2020-01-15",
    author: "Okamoto et al.",
    excerpt: "Researchers found that fishing practices can hide local population collapses by creating spatial mismatches between what managers see at large scales versus what's happening in small areas, using Pacific herring as a case study.",
    featuredImage: "/images/pacific-herring-net.jpeg",
    tags: ["Publication","2020","Management","Conservation"],
    aliases: ["hidden-fish-population-collapses-slip-past-regional-manageme"],
    doiUrl: "https://doi.org/10.1002/eap.2051",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=15E1ewttqQ9n5iUcekIEA7UOOIX1hT4gp&usp=drive_fs",
    content: `Researchers found that fishing practices can hide local population collapses by creating spatial mismatches between what managers see at large scales versus what's happening in small areas, using Pacific herring as a case study. The researchers developed three complementary models: theoretical equations showing how harvest affects spatial variability, analysis of Pacific herring data from British Columbia, and numerical simulations testing different management strategies. Harvesting metapopulations magnifies spatial variability, creating discrepancies between regional and local population trends. Spatial complexity can promote stability at large scales while hiding negative consequences for people and animals operating at small scales. Local population collapses can occur despite apparently sustainable harvests at regional scales. Dynamically optimizing harvest can minimize local collapse risk without sacrificing overall yield. The research shows how conventional large-scale fisheries management can inadvertently create 'cryptic collapses' that disproportionately harm Indigenous fishers and marine predators who depend on local fish populations, while suggesting management solutions that could prevent these less visible disasters.

## Citation

Okamoto, Daniel K.; Hessing‐Lewis, Margot; Samhouri, Jameal F.; Shelton, Andrew O.; Stier, Adrian; Levin, Philip S.; Salomon, Anne K. (2020). Spatial variation in exploited metapopulations obscures risk of collapse. *Ecological Applications*.

[Read the full paper](https://doi.org/10.1002/eap.2051)

*This paper is Open Access.*`,
  },
  {
    slug: "fishing-and-climate-change-weakened-stability-in-pacific-her",
    title: "Fishing and Climate Change Weakened Stability in Pacific Herring",
    date: "2020-01-15",
    author: "Stier et al.",
    excerpt: "Researchers studied Pacific herring populations around Haida Gwaii, British Columbia over 65 years to understand how fishing, climate, and population changes affected the stability of interconnected herring groups that historically provided reliable resources to predators and fishermen.",
    featuredImage: "/images/fish-eggs-roe-hand-closeup.JPG",
    tags: ["Publication","2020","Management","Climate"],
    aliases: ["decades-of-fishing-and-climate-change-eroded-nature-s-insura"],
    doiUrl: "https://doi.org/10.1002/ecs2.3283",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1yeMMwIsfA8TP9KnUPsA4j41mT9YJCu0q&usp=drive_fs",
    content: `Our analysis of 65 years of Pacific herring data from Haida Gwaii shows how a natural insurance system has eroded over time. We assembled records from 1950 to 2015 showing how Pacific herring populations across 11 locations around the British Columbia archipelago have fundamentally changed. What was once a portfolio of populations that boomed and busted at different times, providing reliable resources to predators and fishermen even when individual groups crashed, has become dangerously synchronized. We wanted to understand what was driving this transformation. We built a Bayesian state-space model using spawn surveys and catch records to tease apart the relative effects of fishing pressure, environmental changes, and population growth on both local herring groups and the archipelago as a whole. Our results painted a clear picture of decline. We documented a severe decline in herring population growth over the 65-year period, along with erosion of the herring portfolio itself. Commercial harvest had historically played a key role in herring dynamics, with typical annual exploitation rates hovering around 15% across the archipelago. But local harvest rates reached as high as 65% when fishing occurred in specific areas. The Pacific Decadal Oscillation and population growth had equally strong effects on both local and regional population dynamics. What struck us most was how substantially the portfolio effect, nature's way of spreading risk across space, had eroded. When populations become synchronized, they lose their ability to buffer against regional collapse. If one crashes, they all crash together. This matters because herring are a cultural keystone species for indigenous peoples and a central node in Northeast Pacific food webs supporting top predators. Our findings suggest that developing herring management strategies at a finer spatial scale may help recover previous levels of spatial population asynchrony and ensure greater regional resource reliability.

## Citation

Stier, Adrian C.; Olaf Shelton, Andrew; Samhouri, Jameal F.; Feist, Blake E.; Levin, Phillip S. (2020). Fishing, environment, and the erosion of a population portfolio. *Ecosphere*.

[Read the full paper](https://doi.org/10.1002/ecs2.3283)

*This paper is Open Access.*`,
  },
  {
    slug: "how-human-driven-behavior-change-can-reshape-ecosystems",
    title: "How Human-Driven Behavior Change Can Reshape Ecosystems",
    date: "2020-01-15",
    author: "Wilson et al.",
    excerpt: "Scientists created a framework showing how human activities change animal behavior, which can cascade through ecosystems to affect fundamental processes like nutrient cycling and pathogen transfer, though most of these ecological consequences remain largely unstudied.",
    featuredImage: "/images/coyote-road.jpeg",
    tags: ["Publication","2020","Conservation"],
    aliases: ["scientists-map-hidden-ways-humans-are-reshaping-ecosystems-t"],
    doiUrl: "https://doi.org/10.1111/ele.13571",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1b4UqrHI4Q-SlQCaghSEJs7A0ZHmV5YY5&usp=drive_fs",
    content: `Our framework maps how human activities change animal behavior, which can cascade through ecosystems to affect fundamental processes like nutrient cycling and pathogen transfer. We synthesized existing literature and theory to create a novel framework mapping pathways from human impacts through behavioral changes to ecosystem functions. The study found that human activities affect animal behavior through four distinct mechanisms. We change population densities through hunting and culling. We create top-down effects by acting as 'super predators', triggering fear responses that can differ from and exceed those caused by natural predators. We alter resource availability through intentional feeding or habitat destruction. And we modify physical environments through noise, light, chemical pollution, and habitat structure changes. These behavioral shifts can affect important ecosystem functions including nutrient cycling, primary productivity, pathogen transfer, and habitat provision. What struck us most was how few studies documented the complete pathway from human impact through behavioral change to ecosystem consequences. The literature is full of papers showing that construction noise makes birds sing differently, or that boat traffic changes whale movement patterns, but almost nobody follows up to see if these behavioral changes translate into measurable ecological effects. This knowledge gap has serious implications for conservation management. Without understanding these pathways, we risk wasting resources on mitigating behavioral effects that ultimately have little ecological relevance. Conversely, we might overlook important drivers of ecosystem change not addressed through traditional management strategies. Our framework can help prioritize which human-induced behavioral changes deserve immediate attention and which might be ecological dead ends.

## Citation

Wilson, Margaret W.; Ridlon, April D.; Gaynor, Kaitlyn M.; Gaines, Steven D.; Stier, Adrian C.; Halpern, Benjamin S. (2020). Ecological impacts of human‐induced animal behaviour change. *Ecology Letters*.

[Read the full paper](https://doi.org/10.1111/ele.13571)`,
  },
  {
    slug: "satellite-detected-grazing-halos-track-reef-fish-foraging",
    title: "Satellite-Detected Grazing Halos Track Reef Fish Foraging",
    date: "2019-01-15",
    author: "DiFiore et al.",
    excerpt: "Researchers discovered that the distinctive bare sand rings visible around coral patches from satellite imagery; called grazing halos; are created by herbivorous fish that venture out to graze on seagrass but stay close to the reef to avoid predators.",
    featuredImage: "/images/halo-grazing.png",
    tags: ["Publication","2019","Predator-Prey","Coral"],
    aliases: ["grazing-halos-visible-from-space-reveal-hidden-drama-of-reef"],
    doiUrl: "https://doi.org/10.3354/meps13074",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1r_4hN4yHw_met53B5hUwfYRB9SeVrV8U&usp=drive_fs",
    content: `We examined satellite images of tropical coastlines and noticed something curious: rings of bare sand surrounding isolated coral heads. These grazing halos, sometimes stretching tens of meters from reef edges, have puzzled scientists for years. Now research led by Bryan DiFiore, working with Simon Queenborough, Elizabeth Madin, Valerie Paul, Mary Beth Decker, and Adrian Stier, shows the ecological drama creating these patterns. The halos form through a simple but elegant mechanism: herbivorous fish living on coral reefs need to eat seagrass and algae growing on the surrounding seafloor, but they also need to avoid becoming meals themselves. This creates a landscape of fear. Fish venture out to graze but stay close enough to dart back to shelter when predators appear. We combined satellite imagery with underwater surveys to understand what factors determine halo size. They found that predation risk, herbivore density, and reef patch size all influence how far fish will venture from safety. Counterintuitively, halos were often larger around reefs with more predators. We suggest this occurs because in predator-rich areas, herbivores must graze more intensively in the safe zone close to the reef, completely clearing vegetation there. These findings transform grazing halos from curiosities into potential monitoring tools. Because the halos are visible from satellites, they could allow scientists to assess reef ecosystem health across enormous areas. A reef with a healthy halo likely has functioning predator-prey dynamics and active herbivore populations. Changes in halo patterns over time might signal shifts in ecosystem function. The study also demonstrates how fear itself shapes ecosystems. Predators don't just kill prey directly; they create landscapes of risk that alter where and how prey species feed. These non-consumptive effects of predators can be as ecologically important as actual predation, sculpting patterns visible from space.

## Citation

DiFiore, Bp; Queenborough, Sa; Madin, Emp; Paul, Vj; Decker, Mb; Stier, Ac (2019). Grazing halos on coral reefs: predation risk, herbivore density, and habitat size influence grazing patterns that are visible from space. *Marine Ecology Progress Series*.

[Read the full paper](https://doi.org/10.3354/meps13074)`,
  },
  {
    slug: "climate-change-shifts-what-ocean-recovery-requires",
    title: "Climate Change Shifts What Ocean Recovery Requires",
    date: "2019-01-15",
    author: "Ingeman et al.",
    excerpt: "Scientists argue that ocean recovery efforts are failing because they treat recovery goals as fixed targets, when in reality marine ecosystems and human societies are constantly changing due to climate change and other factors.",
    featuredImage: "/images/whale-ship.jpeg",
    tags: ["Publication","2019","Climate","Conservation"],
    aliases: ["ocean-conservation-is-chasing-moving-targets-as-climate-chan"],
    doiUrl: "https://doi.org/10.1126/science.aav1004",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1ReBpBG-2nx6mEnmrADRKh3h7uJK3Xy46&usp=drive_fs",
    content: `Scientists argue that ocean recovery efforts are failing because they treat recovery goals as fixed targets, when in reality marine ecosystems and human societies are constantly changing due to climate change and other factors. The review synthesized existing research on marine recovery efforts, analyzed case studies like North Atlantic right whale recovery, and developed a new framework for thinking about recovery as dynamic rather than static targets. Recovery efforts often fail because they don't account for the dynamic nature of marine ecosystems and changing environmental conditions. There should be multiple acceptable recovery outcomes between minimum population viability and maximum carrying capacity, rather than a single fixed target. Future recovery frameworks need institutional flexibility to respond rapidly to changing conditions and integrate governance from local to regional scales. Research advances are improving our ability to predict environmental change effects on ocean productivity and calibrate recovery targets to changing conditions. The research challenges the traditional approach to marine conservation by showing that fixed recovery targets don't work in a changing ocean. It provides a roadmap for more flexible, adaptive conservation strategies that could be important as climate change accelerates.

## Citation

Ingeman, Kurt E.; Samhouri, Jameal F.; Stier, Adrian C. (2019). Ocean recoveries for tomorrow’s Earth: Hitting a moving target. *Science*.

[Read the full paper](https://doi.org/10.1126/science.aav1004)

*This paper is Open Access.*`,
  },
  {
    slug: "fish-metabolism-often-deviates-from-simple-scaling-rules",
    title: "Fish Metabolism Often Deviates From Simple Scaling Rules",
    date: "2019-01-15",
    author: "Jerde et al.",
    excerpt: "Researchers analyzed metabolic rate data from 25 fish studies to determine how fish metabolism scales with body size, finding strong evidence for a scaling coefficient of 0.89 rather than the commonly assumed values of 0.67, 0.75, or 1.0.",
    featuredImage: "/images/flatfish-flounder-camouflage-sand.JPG",
    tags: ["Publication","2019","Climate"],
    aliases: ["fish-metabolism-follows-different-rules-than-scientists-thou"],
    doiUrl: "https://doi.org/10.3389/fphys.2019.01166",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=14AFSyczhrNE0uytf2ql358gNBLzK-oJH&usp=drive_fs",
    content: `Researchers analyzed metabolic rate data from 25 fish studies to determine how fish metabolism scales with body size, finding strong evidence for a scaling coefficient of 0.89 rather than the commonly assumed values of 0.67, 0.75, or 1.0. The researchers curated data from 25 studies measuring standard metabolic rate, temperature, and mass across 55 independent trials and 16 fish species, then used flexible random effects models and information theory-based model selection to quantify the relationship. Strong evidence for a metabolic scaling coefficient of 0.89 with ΔSIC interval spanning 0.82 to 0.99. Mechanistically derived coefficients of 0.67, 0.75, and 1.0 are not supported by the data. Model selection supports random intercepts and random slopes by species, indicating other factors like taxonomy or lifestyle affect the relationship. Metabolic rates vary 2-3 fold across individuals of the same population and this variation is repeatable. The research is important for linking species physiology to projections of population abundance and predicting the impacts of climate change on species distributions. The metabolic scaling relationship is used as a cornerstone of metabolic theory of ecology to connect individual physiology to community patterns and energy flows across landscapes.

## Citation

Jerde, Christopher L.; Kraskura, Krista; Eliason, Erika J.; Csik, Samantha R.; Stier, Adrian C.; Taper, Mark L. (2019). Strong Evidence for an Intraspecific Metabolic Scaling Coefficient Near 0.89 in Fish. *Frontiers in Physiology*.

[Read the full paper](https://doi.org/10.3389/fphys.2019.01166)

*This paper is Open Access.*`,
  },
  {
    slug: "long-term-ocean-research-sites-strengthen-marine-monitoring",
    title: "Long-Term Ocean Research Sites Strengthen Marine Monitoring",
    date: "2019-01-15",
    author: "Muelbert et al.",
    excerpt: "This study asks how the International Long-Term Ecological Research Network (ILTER), with more than 100 coastal and marine research sites worldwide, could serve as a platform for integrated global ocean observation by combining biological, physical, and chemical monitoring.",
    featuredImage: "/images/ocean-wave-kelp-breaking.jpeg",
    tags: ["Publication","2019","Climate"],
    aliases: ["century-old-ocean-research-sites-could-hold-key-to-global-ma"],
    doiUrl: "https://doi.org/10.3389/fmars.2019.00527",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=106GtE_QWH5fCIeJ22qP7-yVDPl3A8vrH&usp=drive_fs",
    content: `Our analysis shows that the International Long-Term Ecological Research Network includes more than 100 coastal and marine research sites worldwide, some with observation records stretching back to the early 1900s. We conducted a SWOT analysis examining the strengths, weaknesses, opportunities, and threats facing this global network of 44 countries and more than 700 research sites. The study found that the network measures a broad variety of abiotic and biotic variables that could feed into global ocean observation initiatives. Some of our coastal and marine sites have data records that predate ILTER's formal establishment in 1993. The ILTER community has developed tools to compare methods and allow data integration, though putting open data principles into practice remains challenging at most member networks and individual sites. What emerged was both encouraging and sobering. While individual sites collect valuable data, harmonizing these measurements remains a challenge. The study found that many sites operate in relative isolation, missing opportunities for coordinated observation. The Global Ocean Observing System has recognized a critical imbalance between physical and biological observations in most ocean monitoring systems. This matters because our coastal and marine sites are uniquely positioned to fill this gap, focusing on consequences of biodiversity alteration, productivity changes, and cumulative impacts of multiple stressors including overfishing and ocean acidification. The length of observations at many sites enhances opportunities to document global change over decades. Our network's commitment to free and open data sharing following F.A.I.R principles offers hope, but implementation gaps remain. Strengthening coordination among sites and with external initiatives will be important to maximize their potential for addressing present and future challenges in ocean observations.

## Citation

Muelbert, José H.; Nidzieko, Nicholas J.; Acosta, Alicia T. R.; Beaulieu, Stace E.; Bernardino, Angelo F.; Boikova, Elmira; Bornman, Thomas G.; Cataletto, Bruno; Deneudt, Klaas; Eliason, Erika; Kraberg, Alexandra; Nakaoka, Masahiro; Pugnetti, Alessandra; Ragueneau, Olivier; Scharfe, Mirco; Soltwedel, Thomas; Sosik, Heidi M.; Stanisci, Angela; Stefanova, Kremena; Stéphan, Pierre; Stier, Adrian; Wikner, Johan; Zingone, Adriana (2019). ILTER – The International Long-Term Ecological Research Network as a Platform for Global Coastal and Ocean Observation. *Frontiers in Marine Science*.

[Read the full paper](https://doi.org/10.3389/fmars.2019.00527)

*This paper is Open Access.*`,
  },
  {
    slug: "urchin-size-and-behavior-shape-predation-risk",
    title: "Urchin Size and Behavior Shape Predation Risk",
    date: "2019-01-15",
    author: "Pretorius et al.",
    excerpt: "Researchers studied how purple sea urchin behavior and size affect their survival when faced with California spiny lobster predators, finding that smaller, more active urchins are most vulnerable to being eaten.",
    featuredImage: "/images/purple-urchin.jpeg",
    tags: ["Publication","2019","Predator-Prey"],
    aliases: ["restless-sea-urchins-pay-the-ultimate-price-size-and-behavio"],
    doiUrl: "https://doi.org/10.1111/eth.12924",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1scWQi1U6s_r96IBjUp4lZBTlAAt5TipV&usp=drive_fs",
    content: `Researchers studied how purple sea urchin behavior and size affect their survival when faced with California spiny lobster predators, finding that smaller, more active urchins are most vulnerable to being eaten. The team collected 170 purple urchins and 3 spiny lobsters from California waters, tested individual urchins for activity levels and covering behavior, then placed groups of 4 urchins with a single lobster in mesocosms for 108 hours to see which ones survived. High activity level was negatively associated with urchin survival; more active urchins were more likely to be eaten. The negative effect of activity on survival was strong for smaller urchins but weaker for large urchins. Urchin size alone and covering behavior alone did not independently influence survival. Individual urchins showed consistent behavioral differences over time in both activity and covering behavior. The research suggests that recovering lobster populations could selectively remove certain urchin types from populations, potentially altering kelp forest stability. Since urchins can consume large quantities of giant kelp and drive ecosystem shifts between kelp forests and urchin barrens, understanding which urchins survive predation could help predict when these important 'tipping points' occur.

## Citation

Pretorius, Justin D.; Lichtenstein, James L. L.; Eliason, Erika J.; Stier, Adrian C.; Pruitt, Jonathan N. (2019). Predator‐induced selection on urchin activity level depends on urchin body size. *Ethology*.

[Read the full paper](https://doi.org/10.1111/eth.12924)

*This paper is Open Access.*`,
  },
  {
    slug: "marine-dispersal-timing-matters-alongside-disperser-abundanc",
    title: "Marine Dispersal Timing Matters Alongside Disperser Abundance",
    date: "2019-01-15",
    author: "Stier et al.",
    excerpt: "Using experimental seagrass communities, researchers discovered that when organisms disperse between habitat patches matters as much as how much they disperse, with consequences for understanding how dispersal maintains biodiversity.",
    featuredImage: "/images/seagrass.jpeg",
    tags: ["Publication","2019"],
    aliases: ["timing-is-everything-when-marine-species-disperse-matters-as"],
    doiUrl: "https://doi.org/10.3354/meps12908",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1y5X-IbM4uA58DMaN_M26fh0WzbTeR6hu&usp=drive_fs",
    content: `We examined how dispersal, the movement of organisms between habitat patches, profoundly influences biodiversity patterns. But research by Adrian Stier, Shannon Lee, and Mary O'Connor shows that when dispersal happens may be just as important as how much dispersal occurs. We created experimental seagrass metacommunities, networks of connected habitat patches, and manipulated both the rate and temporal pattern of dispersal between patches. Some treatments received constant low-level dispersal, while others received equivalent total dispersal concentrated into pulses. This allowed them to separate the effects of dispersal amount from dispersal timing. The results challenged simple assumptions about how dispersal affects diversity. The relationship between dispersal and diversity wasn't fixed but depended critically on temporal variation. Constant dispersal and pulsed dispersal produced different diversity patterns even when the total amount of movement between patches was identical. These findings have consequences for marine conservation. As coastal habitats become increasingly fragmented by development, understanding what maintains diversity in disconnected patches becomes important. Conservation strategies often focus on maintaining or restoring connectivity between habitat patches, but this study suggests the pattern of that connectivity matters too. Consider two marine reserves connected by occasional larval dispersal. If larvae move between reserves in irregular pulses during spawning events, the diversity outcomes might differ substantially from a scenario where the same total number of larvae move in a steady trickle. Management strategies that account for this temporal dimension of connectivity could be more effective at maintaining biodiversity. The experimental approach using seagrass communities provided a tractable system for manipulating dispersal in ways that would be impossible in natural settings. While translating these results to larger scales requires caution, the fundamental insight that timing matters points to future work on understanding and managing marine metacommunities.

## Citation

Stier, Ac; Lee, Sc; O'Connor, Mi (2019). Temporal variation in dispersal modifies dispersal-diversity relationships in an experimental seagrass metacommunity. *Marine Ecology Progress Series*.

[Read the full paper](https://doi.org/10.3354/meps12908)`,
  },
  {
    slug: "habitat-arrangement-can-create-persistent-spatial-patterns",
    title: "Habitat Arrangement Can Create Persistent Spatial Patterns",
    date: "2018-01-15",
    author: "Hamman et al.",
    excerpt: "Using mathematical models, researchers showed that the spatial arrangement of habitat patches creates persistent patterns in where organisms end up settling, even when colonizers arrive randomly from the surrounding environment.",
    featuredImage: "/images/lorenz-attractor-abstract-art.jpeg",
    tags: ["Publication","2018"],
    aliases: ["mathematical-model-reveals-how-habitat-arrangement-creates-p"],
    doiUrl: "https://doi.org/10.1007/s12080-017-0352-1",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1QXHBCA6eoJnD_iGBRtx115DarRHmNZu1&usp=drive_fs",
    content: `We investigated why some habitat patches consistently harbor more organisms than others, even when they seem identical. Research by Elizabeth Hamman, Scott McKinley, Adrian Stier, and Craig Osenberg shows that the answer lies in geometry: the spatial arrangement of patches creates invisible channels that funnel colonizers toward certain locations. We developed mathematical models to explore how organisms moving through a landscape interact with the configuration of habitat patches. They focused on systems where colonizers arrive from a larger pool, like fish larvae settling onto reef patches or insects colonizing forest fragments. Their key insight is that landscape configuration itself generates spatial heterogeneity in colonization. Consider a cluster of habitat patches: those in certain positions intercept more colonizers simply because of where they sit relative to the flow of arriving organisms. A patch on the edge of a cluster facing the direction colonizers typically arrive will accumulate more settlers than one tucked in the center, regardless of any differences in habitat quality. These patterns prove remarkably persistent. Even after many generations of colonization and mortality, the spatial biases created by landscape geometry remain. This means that certain patches will consistently outperform others in population size, creating what appears to be habitat quality differences but is a consequence of spatial arrangement. The findings have practical implications for conservation in fragmented landscapes. When designing marine reserves or wildlife corridors, the spatial arrangement of protected areas matters beyond just their total size. Strategic placement can use these geometric effects to maximize colonization success. The research also helps explain puzzling patterns in natural systems. Ecologists often observe substantial variation in population density across apparently similar habitats. This variation is typically attributed to unmeasured habitat quality differences. The new models suggest that some of this variation may simply reflect the landscape's geometry, an insight that could improve population models and management strategies.

## Citation

Hamman, Elizabeth A.; McKinley, Scott A.; Stier, Adrian C.; Osenberg, Craig W. (2018). Landscape configuration drives persistent spatial patterns of occupant distributions. *Theoretical Ecology*.

[Read the full paper](https://doi.org/10.1007/s12080-017-0352-1)`,
  },
  {
    slug: "arrival-timing-and-supply-shape-reef-fish-settlement-outcome",
    title: "Arrival Timing and Supply Shape Reef Fish Settlement Outcomes",
    date: "2017-01-15",
    author: "Geange et al.",
    excerpt: "Researchers tested whether the number of fish already on a reef or their arrival order matters more for determining whether new fish successfully colonize, finding that both factors influence survival but in different ways.",
    featuredImage: "/images/dascyllus-damselfish-coral.jpeg",
    tags: ["Publication","2017","Coral"],
    aliases: ["both-timing-and-numbers-matter-for-young-fish-trying-to-clai"],
    doiUrl: "https://doi.org/10.1007/s00338-016-1503-3",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1Rj6NBWymoBVPvLPPmWTCOF3UDbrtvgCy&usp=drive_fs",
    content: `The researchers studied what happens when young fish settle from the plankton onto coral reefs and face a competitive gauntlet. Some reefs are already crowded with residents, while others are nearly empty. Some settlers arrive early, while others come later. Research by Shane Geange, Davina Poulos, Adrian Stier, and Mark McCormick untangles how these factors combine to determine which fish successfully establish themselves. We designed experiments that independently manipulated two factors: the abundance of fish already present on reef patches, and whether new settlers arrived before or after other colonizers. This allowed them to separate the effects of competition with many residents from the advantages of arriving early. Both factors mattered, but in distinct ways. Higher resident abundance reduced colonization success, likely through increased competition for food and shelter. Priority effects also influenced outcomes: fish that arrived first gained advantages that persisted even as competitor numbers changed. Crucially, these effects operated independently and added together rather than interacting. This additivity is important because it suggests the mechanisms driving each effect are different. Competition with residents probably involves direct scramble for limited resources, while priority effects may involve establishing territories, depleting local food patches, or gaining size advantages before competitors arrive. The findings help explain the high variability in reef fish recruitment observed in nature. Settlement success depends not just on how many fish are already present, but on the complex history of who arrived when. Two reefs with identical current populations might have very different colonization outcomes depending on the sequence of previous arrivals. For reef managers, these results suggest that timing of restoration efforts matters. Reseeding efforts might be more successful if they can establish fish before natural colonization waves arrive, gaining priority advantages. Understanding these dynamics becomes increasingly important as reefs face repeated disturbances and must recolonize after bleaching events and storms.

## Citation

Geange, Shane W.; Poulos, Davina E.; Stier, Adrian C.; McCormick, Mark I. (2017). The relative influence of abundance and priority effects on colonization success in a coral-reef fish. *Coral Reefs*.

[Read the full paper](https://doi.org/10.1007/s00338-016-1503-3)`,
  },
  {
    slug: "participation-costs-can-slow-ocean-recovery-decisions",
    title: "Participation Costs Can Slow Ocean Recovery Decisions",
    date: "2017-01-15",
    author: "Lynham et al.",
    excerpt: "When marine management requires expensive stakeholder participation, it creates 'inertia' that makes ecosystems harder to shift between different states, potentially trapping them in degraded conditions even after pressures are reduced.",
    featuredImage: "/images/fishing-harbor-marina-mountains.JPG",
    tags: ["Publication","2017","Management"],
    aliases: ["the-hidden-cost-of-getting-everyone-to-the-table-why-partici"],
    doiUrl: "https://doi.org/10.1016/j.marpol.2016.11.011",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1R60A-C1S4L9vAfcIU0uBlAVX4ZWYsYtr&usp=drive_fs",
    content: `We examined participatory management, where stakeholders collaborate on marine resource decisions. But research led by John Lynham with an international team of marine scientists shows an unintended consequence: the costs of bringing everyone together can make it harder to restore damaged ecosystems. We developed a theoretical framework examining how transaction costs in management, the time, money, and effort required for stakeholder processes, interact with ecosystem dynamics. Marine ecosystems often exist in alternative stable states: a kelp forest might flip to an urchin barren, or a coral reef might shift to algal dominance. These regime shifts are notoriously difficult to reverse. The key insight is that management transaction costs create inertia. Changing fishing regulations requires gathering stakeholders, conducting assessments, negotiating compromises, and implementing new rules. These costs must be overcome before any management change occurs, regardless of ecological conditions. This creates a barrier that must be cleared before ecosystems can begin recovering. Consider a degraded fishery where everyone agrees stocks need protection. Even with consensus, implementing new rules requires expensive stakeholder processes. The time lag created by these processes allows further degradation, potentially pushing the system past ecological tipping points where recovery becomes even harder. The same inertia cuts both ways. Once a healthy ecosystem is established under a management regime, the costs of changing that regime protect it from degradation. The barriers that make recovery difficult also make collapse harder. This suggests that investing heavily in management to achieve ecosystem recovery is worthwhile because the same institutional inertia will then protect the restored state. The findings don't argue against participatory management, but highlight the need to factor these dynamics into management design. Streamlining decision processes, establishing pre-approved adaptive management triggers, or reducing transaction costs during crisis periods could help ecosystems escape degraded states more readily.

## Citation

Lynham, J.; Halpern, B.S.; Blenckner, T.; Essington, T.; Estes, J.; Hunsicker, M.; Kappel, C.; Salomon, A.K.; Scarborough, C.; Selkoe, K.A.; Stier, A. (2017). Costly stakeholder participation creates inertia in marine ecosystems. *Marine Policy*.

[Read the full paper](https://doi.org/10.1016/j.marpol.2016.11.011)`,
  },
  {
    slug: "early-warning-signals-can-help-detect-ocean-ecosystem-collap",
    title: "Early Warning Signals Can Help Detect Ocean Ecosystem Collapse",
    date: "2017-01-15",
    author: "Samhouri et al.",
    excerpt: "Scientists developed a new method to identify tipping points where marine ecosystems suddenly shift in response to environmental changes and human activities. They tested this approach on two decades of data from the California Current ecosystem off the U.S. West Coast.",
    featuredImage: "/images/ca-sealion.jpeg",
    tags: ["Publication","2017","Management","Climate"],
    aliases: ["scientists-develop-early-warning-system-for-ocean-ecosystem"],
    doiUrl: "https://doi.org/10.1002/ecs2.1860",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1Rgu0gVVio1EosG6UZNgqZpotcdVOPEGr&usp=drive_fs",
    content: `Scientists developed a new method to identify tipping points where marine ecosystems suddenly shift in response to environmental changes and human activities. They tested this approach on two decades of data from the California Current ecosystem off the U.S. West Coast. The researchers created a framework using multiple statistical models to analyze 20 years of California Current data, looking for nonlinear threshold relationships between 9 ecosystem indicators (like copepods and sea lion populations) and 16 different environmental and human pressures. Five ecosystem indicators showed threshold responses to environmental and human pressures, meaning they changed substantially once certain pressure levels were crossed. Both analytical methods agreed on two specific threshold relationships: winter copepod populations responding to habitat modification, and sea lion pup production responding to Pacific climate patterns. As many as five ecosystem indicators may exhibit threshold changes in response to negative summer Pacific Decadal Oscillation values, suggesting climate effects cascade across multiple levels of the food web. The framework successfully identified where nonlinear ecosystem responses occur, providing a new way to set reference points for ecosystem management. The research provides managers with a tool to predict when marine ecosystems might suddenly collapse or shift to new states, allowing them to intervene before crossing dangerous tipping points. It moves ocean management beyond just tracking average conditions to understanding when incremental changes might trigger large ecosystem responses.

## Citation

Samhouri, Jameal F.; Andrews, Kelly S.; Fay, Gavin; Harvey, Chris J.; Hazen, Elliott L.; Hennessey, Shannon M.; Holsman, Kirstin; Hunsicker, Mary E.; Large, Scott I.; Marshall, Kristin N.; Stier, Adrian C.; Tam, Jamie C.; Zador, Stephani G. (2017). Defining ecosystem thresholds for human activities and environmental pressures in the California Current. *Ecosphere*.

[Read the full paper](https://doi.org/10.1002/ecs2.1860)

*This paper is Open Access.*`,
  },
  {
    slug: "predator-prey-dynamics-should-be-managed-together-during-rec",
    title: "Predator-Prey Dynamics Should Be Managed Together During Recovery",
    date: "2017-01-15",
    author: "Samhouri et al.",
    excerpt: "Researchers discovered that managing predators and their prey simultaneously can produce faster ecosystem recovery than addressing each species separately, challenging traditional single-species management approaches.",
    featuredImage: "/images/orca-pod.jpeg",
    tags: ["Publication","2017","Management","Predator-Prey","Recovery"],
    aliases: ["want-faster-ocean-recovery-manage-predators-and-prey-togethe"],
    doiUrl: "https://doi.org/10.1038/s41559-016-0068",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1R9a3lPr5HiOt41JkmUC_YjUA1yxe-PQH&usp=drive_fs",
    content: `Marine conservation often tackles one species or fishery at a time: protect the cod, restore the sharks, manage the herring. Research by Jameal Samhouri, Adrian Stier, Shannon Hennessey, Mark Novak, Benjamin Halpern, and Phillip Levin suggests this piecemeal approach may be missing a faster path to recovery. Using mathematical models of predator-prey dynamics, the researchers compared different management scenarios. They simulated what happens when managers focus on prey species alone, predators alone, or coordinate management of both simultaneously. The results were striking: synchronized management often achieved recovery goals substantially faster. The mechanism makes intuitive sense once you consider food web dynamics. If you protect prey without managing predators, recovering prey populations can be held in check by predators. If you protect predators without addressing prey depletion, predators may have insufficient food to recover. Managing both together allows the food web to rebuild in a coordinated way, with prey base expansion supporting predator recovery. The benefits of synchronized management proved most pronounced when predator-prey interactions were strong. In systems where predators heavily influence prey populations, or where prey availability limits predators, coordinating management across trophic levels delivered the largest gains. In weakly interacting systems, single-species approaches performed nearly as well. This has practical implications for marine managers facing degraded ecosystems. Rather than restoring one component at a time, coordinated ecosystem-based management might achieve faster results. This doesn't necessarily mean doing more; it means coordinating existing management actions across species. The findings also caution against some intuitive management sequences. Managers might assume rebuilding prey first creates a foundation for predator recovery. But the models suggest this staged approach can be slower than simultaneous management. The optimal path depends on food web structure and the strength of species interactions. Implementing synchronized management faces institutional challenges since different species often fall under different agencies or regulations. But as ecosystems face accelerating threats from climate change, finding faster paths to recovery becomes increasingly pressing.

## Citation

Samhouri, Jameal F.; Stier, Adrian C.; Hennessey, Shannon M.; Novak, Mark; Halpern, Benjamin S.; Levin, Phillip S. (2017). Rapid and direct recoveries of predators and prey through synchronized ecosystem management. *Nature Ecology & Evolution*.

[Read the full paper](https://doi.org/10.1038/s41559-016-0068)`,
  },
  {
    slug: "integrating-traditional-and-scientific-knowledge-improves-oc",
    title: "Integrating Traditional and Scientific Knowledge Improves Ocean Conservation",
    date: "2017-01-15",
    author: "Stier et al.",
    excerpt: "Researchers surveyed experts on Pacific herring food webs to understand how different types of knowledge; scientific, traditional, and local; can be integrated into conservation planning for complex marine ecosystems.",
    featuredImage: "/images/whale-eating-herring.jpeg",
    tags: ["Publication","2017","Conservation"],
    aliases: ["different-ways-of-knowing-the-ocean-how-traditional-and-scie"],
    doiUrl: "https://doi.org/10.1111/conl.12245",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1OmZXlJGjfUqw3YhDTCK4nvWDpPBdQf2t&usp=drive_fs",
    content: `The researchers studied Pacific herring, which are central to the coastal food webs of the Pacific Northwest. They feed whales, seabirds, salmon, and humans. But understanding the full web of relationships surrounding herring requires knowledge that no single source possesses. Research led by Adrian Stier, working with Jameal Samhouri, Steven Gray, Rebecca Martone, Megan Mach, Benjamin Halpern, Carrie Kappel, Courtney Scarborough, and Phillip Levin, explored how different forms of expertise can be combined for better conservation. We focused on Haida Gwaii, British Columbia, where Pacific herring have sustained Indigenous communities for millennia and where scientific research has documented herring ecology for decades. They surveyed experts representing three knowledge types: scientific researchers, traditional ecological knowledge holders from Indigenous communities, and local fishers and resource users. Rather than finding conflicting worldviews, the study found complementary expertise. Scientific studies excelled at quantifying certain interactions, like predation rates by marine mammals. Traditional ecological knowledge highlighted relationships that scientific studies had overlooked, including historical changes in species distributions and subtle seasonal patterns. Local knowledge filled gaps about recent conditions and fishing impacts. The synthesis showed a richer picture of the herring food web than any single knowledge source provided. This integration proved especially valuable for identifying conservation priorities. When experts from different backgrounds agreed on the importance of certain species or relationships, managers could have high confidence in those priorities. Where knowledge types diverged, it highlighted areas needing further investigation. The approach isn't without challenges. Different knowledge systems use different evidence standards, time scales, and ways of describing ecological relationships. We developed methods to translate across these frameworks while respecting the integrity of each knowledge type. As marine ecosystems face severe change from climate warming and shifting species distributions, the ecological knowledge accumulated over generations by Indigenous communities and local resource users becomes increasingly valuable. This study demonstrates practical methods for honoring and integrating that knowledge into conservation planning.

## Citation

Stier, Adrian C.; Samhouri, Jameal F.; Gray, Steven; Martone, Rebecca G.; Mach, Megan E.; Halpern, Benjamin S.; Kappel, Carrie V.; Scarborough, Courtney; Levin, Phillip S. (2017). Integrating Expert Perceptions into Food Web Conservation and Management. *Conservation Letters*.

[Read the full paper](https://doi.org/10.1111/conl.12245)

*This paper is Open Access.*`,
  },
  {
    slug: "reef-predators-reduce-prey-abundance-with-limited-species-se",
    title: "Reef Predators Reduce Prey Abundance With Limited Species Selectivity",
    date: "2017-01-15",
    author: "Stier et al.",
    excerpt: "Researchers analyzed ten predation experiments on coral reefs to understand how mesopredators affect the diversity of young reef fish communities. They found that predators reduced fish abundance by 60% on average, but this reduction was primarily due to generalist feeding behavior rather than selective targeting of specific species.",
    featuredImage: "/images/grouper.jpeg",
    tags: ["Publication","2017","Predator-Prey","Conservation","Coral"],
    aliases: ["reef-predators-thin-fish-ranks-but-don-t-pick-favorites-exce"],
    doiUrl: "https://doi.org/10.1007/s00338-017-1544-2",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1P9QIJFiVwz8gN01Ib8QTRV93sUDa1GAI&usp=drive_fs",
    content: `Our meta-analysis of ten predation experiments on coral reefs shows how mesopredators affect the diversity of young reef fish communities. We analyzed every published field experiment where researchers had manipulated predator presence on artificial reefs and tracked what happened to recruiting fish communities. The study found that across all studies, reefs with mesopredators had 60% lower fish abundance and 35% lower gamma diversity. Alpha diversity, the number of species within individual patches, dropped by 36%. At first glance, this looked like ecological disaster. But when we used rarefaction to account for the fact that fewer total fish automatically means fewer species detected, the story changed completely. Rarefied alpha diversity showed virtually no change. Beta diversity increased by 15% in the presence of predators, but this effect also disappeared after rarefaction. What struck us most was how consistent this pattern was across different predator species and reef systems. The mesopredators were acting as generalists, eating fish in proportion to their abundance rather than selectively targeting particular species. However, invasive predators may represent a different concern. The peacock grouper, intentionally introduced to Hawaii, has become a numerically dominant mesopredator in invaded communities. The lionfish invasion in the Atlantic represents another case where non-native predators might have fundamentally different impacts. Our findings have consequences for coral reef conservation. The study found that most native mesopredators don't seem to cause disproportionate biodiversity loss, they're more like lawnmowers than selective weeders. However, invasive predators may pose greater threats to reef biodiversity. As climate change and human impacts continue reshaping reef communities, we need to understand not just whether predators reduce diversity, but how different types of predators might interact with other stressors.

## Citation

Stier, Adrian C.; Stallings, Christopher D.; Samhouri, Jameal F.; Albins, Mark A.; Almany, Glenn R. (2017). Biodiversity effects of the predation gauntlet. *Coral Reefs*.

[Read the full paper](https://doi.org/10.1007/s00338-017-1544-2)`,
  },
  {
    slug: "small-coral-reef-predators-can-have-effects-comparable-to-la",
    title: "Small Coral Reef Predators Can Have Effects Comparable to Larger Predators",
    date: "2016-01-15",
    author: "Gallagher et al.",
    excerpt: "Marine scientists studied whether larger predator fish have stronger effects on their prey than smaller ones of the same species. Surprisingly, they found that small and large hawkfish had similar impacts on prey fish communities in coral reefs.",
    featuredImage: "/images/hawkfish-perching.JPG",
    tags: ["Publication","2016","Predator-Prey","Coral"],
    aliases: ["size-doesn-t-always-matter-small-coral-reef-predators-pack-s"],
    doiUrl: "https://doi.org/10.1098/rsos.160414",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1Qhlany_GtqcMs0laDm9VueyeiKlCmYO-&usp=drive_fs",
    content: `Marine scientists studied whether larger predator fish have stronger effects on their prey than smaller ones of the same species. Surprisingly, they found that small and large hawkfish had similar impacts on prey fish communities in coral reefs. Researchers combined field surveys of coral reefs in French Polynesia with laboratory feeding experiments, comparing how small versus large hawkfish of the same species affected prey fish presence and survival. Small and large hawkfish had similar effects on prey fish; both size classes were equally associated with lower chances of prey fish being present on coral heads. In laboratory experiments, attack rates were indistinguishable between small and large hawkfish feeding on the same prey. The presence of any hawkfish, regardless of size, correlated with reduced prey fish presence compared to coral heads with no hawkfish. Predator size structure alone may not always affect the functional role of small predators in coral reef ecosystems. As human fishing pressure removes large predators from coral reefs, understanding whether smaller predators can compensate is important. This research suggests that even small predators can have significant ecological impacts, meaning their increased abundance might partially offset the loss of larger species.

## Citation

Gallagher, Austin J.; Brandl, Simon J.; Stier, Adrian C. (2016). Intraspecific variation in body size does not alter the effects of mesopredators on prey. *Royal Society Open Science*.

[Read the full paper](https://doi.org/10.1098/rsos.160414)

*This paper is Open Access.*`,
  },
  {
    slug: "only-3-of-large-predators-are-recovering-globally",
    title: "Only 3% of Large Predators Are Recovering Globally",
    date: "2016-01-15",
    author: "Marshall et al.",
    excerpt: "As large predators recover from decades of depletion, they create new conservation challenges by potentially threatening other protected species, competing with fisheries, and altering ecosystems in unexpected ways.",
    featuredImage: "/images/Leopard-1-2.jpg",
    tags: ["Publication","2016","Predator-Prey","Conservation","Management"],
    aliases: ["only-3-of-world-s-large-predators-are-actually-recovering-gl"],
    doiUrl: "https://doi.org/10.1111/conl.12186",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1Rr2qZUoRnWt-uFi5v_5DmMUb6VQ3rYcZ&usp=drive_fs",
    content: `We recognized that conservation has celebrated unusual predator recovery stories: wolves returning to Yellowstone, sea otters reclaiming Pacific coastlines. But research by Kristin Marshall, Adrian Stier, Jameal Samhouri, Ryan Kelly, and Eric Ward shows an uncomfortable truth: successful predator recovery often creates new conservation headaches. We reviewed cases where recovering predators came into conflict with other conservation goals. The patterns were striking. In the Pacific Northwest, recovering harbor seals and sea lions now consume millions of salmon, including runs listed under the Endangered Species Act. Managers face the impossible choice of protecting one recovering species or another. Legal frameworks designed to prevent species extinction provide little guidance when protected species conflict. Similar dilemmas arise with fisheries. As marine mammal populations recover, they consume fish that humans also want. Commercial and recreational fisheries that adapted to decades of reduced competition now face new pressures. The conflict isn't just economic: fisheries often support coastal communities with few alternative livelihoods. Perhaps most concerning, ecosystems may not return to historical baselines even when predators recover. Climate change, habitat alteration, and shifts in prey communities mean that recovering predators encounter different worlds than their ancestors inhabited. A recovered sea otter population may not restore kelp forests if water temperatures have exceeded tolerance limits for kelp. We argue that conservation success requires anticipating these conflicts rather than being surprised by them. Management frameworks need mechanisms for navigating trade-offs between conservation goals that may prove incompatible. This doesn't diminish the value of predator recovery, but it does mean that recovery marks the beginning of new management challenges rather than the end of conservation concerns. As more predator populations recover, these dilemmas will multiply. Developing adaptive frameworks for managing recovered predators alongside other conservation priorities becomes increasingly pressing.

## Citation

Marshall, Kristin N.; Stier, Adrian C.; Samhouri, Jameal F.; Kelly, Ryan P.; Ward, Eric J. (2016). Conservation Challenges of Predator Recovery. *Conservation Letters*.

[Read the full paper](https://doi.org/10.1111/conl.12186)

*This paper is Open Access.*`,
  },
  {
    slug: "sampling-bias-can-distort-biodiversity-research",
    title: "Sampling Bias Can Distort Biodiversity Research",
    date: "2016-01-15",
    author: "Stier et al.",
    excerpt: "Scientists developed a new statistical method to separate true ecological differences in species composition between habitats from differences that are simply due to sampling fewer individuals in some locations.",
    featuredImage: "/images/fish-biodiversity.jpeg",
    tags: ["Publication","2016","Conservation"],
    aliases: ["new-method-reveals-how-sampling-bias-has-been-skewing-biodiv"],
    doiUrl: "https://doi.org/10.1002/ecs2.1612",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1PltOrLzlagWarLGrX8fdNCZmsVre9gHB&usp=drive_fs",
    content: `Scientists developed a new statistical method to separate true ecological differences in species composition between habitats from differences that are simply due to sampling fewer individuals in some locations. The researchers used computer simulations to model how sampling effects influence beta diversity measurements, then developed a modified rarefaction technique that standardizes comparisons by controlling for differences in sample sizes across patches. Current beta diversity metrics confound real ecological differences with sampling artifacts, making it difficult to identify true environmental drivers. Decreasing sample size can either increase or decrease observed beta diversity depending on the specific metric used and community properties. Their new rarefaction approach successfully separated sampling effects from environmental filtering in case studies. The method allows researchers to compare beta diversity between communities that have been sampled with different intensities. The research provides tools to make biodiversity studies more reliable and comparable, which is important for conservation decisions like designing reserve networks that maximize species complementarity across sites and understanding how human impacts affect species turnover through time.

## Citation

Stier, Adrian C.; Bolker, Benjamin M.; Osenberg, Craig W. (2016). Using rarefaction to isolate the effects of patch size and sampling effort on beta diversity. *Ecosphere*.

[Read the full paper](https://doi.org/10.1002/ecs2.1612)

*This paper is Open Access.*`,
  },
  {
    slug: "apex-predator-recovery-is-constrained-by-ecology-and-governa",
    title: "Apex Predator Recovery Is Constrained by Ecology and Governance",
    date: "2016-01-15",
    author: "Stier et al.",
    excerpt: "The research examines why many efforts to restore apex predator populations fail or stall, identifying three key challenges beyond the well-known problems of slow life histories and continued hunting: the difficulty of predicting ecosystem interactions, the important importance of timing in recovery efforts, and the need for adaptive management strategies.",
    featuredImage: "/images/blacktip-reef-sharks-split-view-island.jpeg",
    tags: ["Publication","2016","Conservation","Predator-Prey","Recovery"],
    aliases: ["why-bringing-back-apex-predators-is-harder-than-scientists-e"],
    doiUrl: "https://doi.org/10.1126/sciadv.1501769",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1PxnpQ7CByKoGVpK33ecxF11x-aPZTdgk&usp=drive_fs",
    content: `The research examines why many efforts to restore apex predator populations fail or stall, identifying three key challenges beyond the well-known problems of slow life histories and continued hunting: the difficulty of predicting ecosystem interactions, the important importance of timing in recovery efforts, and the need for adaptive management strategies. The researchers present a theoretical framework examining apex predator recovery, drawing on existing research and case studies to identify patterns and develop insights for understanding recovery challenges. Many apex predator recovery efforts have not yet met their potential or have encountered unanticipated problems, with success being the exception rather than the rule. Three underappreciated factors complicate predator recoveries: difficulty identifying relevant trophic interactions, the important timing of recovery efforts in dynamic ecosystems, and the need for adaptive management sequences. A review of 198 reintroduction studies by other researchers found that herbivore reintroductions exhibited 29% higher success compared to carnivore reintroductions. Recovery pathways are not necessarily identical to decline pathways due to hysteresis effects, requiring different strategies for restoration than those used for initial conservation. The research challenges the assumption that simply removing threats will lead to apex predator recovery, showing that ecosystem context and timing are important factors. Understanding these complexities is essential for designing more effective conservation strategies and avoiding unintended consequences in predator restoration efforts.

## Citation

Stier, Adrian C.; Samhouri, Jameal F.; Novak, Mark; Marshall, Kristin N.; Ward, Eric J.; Holt, Robert D.; Levin, Phillip S. (2016). Ecosystem context and historical contingency in apex predator recoveries. *Science Advances*.

[Read the full paper](https://doi.org/10.1126/sciadv.1501769)

*This paper is Open Access.*`,
  },
  {
    slug: "exploitative-interactions-can-still-increase-mutualism-stabi",
    title: "Exploitative Interactions Can Still Increase Mutualism Stability",
    date: "2015-01-15",
    author: "Palmer et al.",
    excerpt: "This study asks how mutualisms, cooperative relationships between species, operate within broader ecological communities, using African acacia trees and their ant partners as a primary example to show why understanding the full community context is essential for explaining these interactions.",
    featuredImage: "/images/bee-pollination.jpeg",
    tags: ["Publication","2015","Mutualism"],
    aliases: ["why-some-of-nature-s-most-important-partnerships-look-like-t"],
    doiUrl: "https://doi.org/10.1093/acprof:oso/9780199675654.003.0009",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1QjafQTm9QN0AWQ-9lh0moCdY4bHKjHZm&usp=drive_fs",
    content: `This study asks how mutualisms, cooperative relationships between species, operate within broader ecological communities, using African acacia trees and their ant partners as a primary example to show why understanding the full community context is essential for explaining these interactions. The researchers conducted a conceptual analysis using case studies, particularly focusing on long-term studies of acacia-ant mutualisms in East Africa and coral-algal symbioses, to demonstrate how community context changes our understanding of species interactions. Crematogaster nigriceps ants appear parasitic on acacia trees. They sterilize the plants and reduce growth rates, but can provide mutualistic benefits by protecting young trees from potentially lethal elephant damage. The costs and benefits of mutualistic relationships must be calculated over entire lifetimes (up to 150 years for acacias) rather than short-term interactions. Most mutualisms involve multiple species rather than simple pairs, with coral-algal symbioses containing nine distinct evolutionary lineages of algae. Community dynamics determine which mutualistic partners dominate at different life stages, with competitive hierarchies among ant species changing as trees mature. The research fundamentally changes how we understand species cooperation in nature, showing that relationships that appear harmful in the short term may be beneficial over ecological timescales. That matters for predicting how ecosystems will respond to environmental changes and for designing effective conservation strategies.

## Citation

Palmer, Todd M.; Pringle, Elizabeth G.; Stier, Adrian; Holt, Robert D. (2015). Mutualism in a community context. **.

[Read the full paper](https://doi.org/10.1093/acprof:oso/9780199675654.003.0009)`,
  },
  {
    slug: "tree-genotype-shapes-how-fish-affect-aquatic-ecosystems",
    title: "Tree Genotype Shapes How Fish Affect Aquatic Ecosystems",
    date: "2015-01-15",
    author: "Rudman et al.",
    excerpt: "Researchers studied how genetic differences in trees and fish work together to control entire aquatic ecosystems, finding that the productivity of cottonwood trees determines how strongly stickleback fish affect their prey.",
    featuredImage: "/images/stickleback.jpeg",
    tags: ["Publication","2015"],
    aliases: ["tree-genes-control-how-fish-shape-entire-aquatic-ecosystems"],
    doiUrl: "https://doi.org/10.1098/rspb.2015.1234",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1ReNl-2BVrxQloQ2HQj0UumC78zF8JJJW&usp=drive_fs",
    content: `Researchers studied how genetic differences in trees and fish work together to control entire aquatic ecosystems, finding that the productivity of cottonwood trees determines how strongly stickleback fish affect their prey. The researchers planted five genetically different cottonwood trees around aquatic tanks, collected their fallen leaves during autumn senescence, and added different types of stickleback fish to see how tree genetics and fish types combined to affect the whole aquatic community. Cottonwood genetic variation in leaf litter production mediated how strongly stickleback affected their prey; more productive trees led to stronger predation effects. The abundance of four common invertebrate prey species was controlled by the interaction between cottonwood productivity and stickleback morphology. Available phosphorus levels were dictated by the combined effects of tree genetics and fish type. These evolutionary interactions were comparable in strength to simply adding or removing predators entirely. The research shows that rapid evolutionary changes in multiple species can reshape entire ecosystems as powerfully as major ecological disruptions like predator loss, suggesting evolution plays a much larger role in ecosystem function than previously recognized.

## Citation

Rudman, Seth M.; Rodriguez-Cabal, Mariano A.; Stier, Adrian; Sato, Takuya; Heavyside, Julian; El-Sabaawi, Rana W.; Crutsinger, Gregory M. (2015). Adaptive genetic variation mediates bottom-up and top-down control in an aquatic ecosystem. *Proceedings of the Royal Society B: Biological Sciences*.

[Read the full paper](https://doi.org/10.1098/rspb.2015.1234)

*This paper is Open Access.*`,
  },
  {
    slug: "a-framework-for-managing-ocean-ecosystems-near-collapse",
    title: "A Framework for Managing Ocean Ecosystems Near Collapse",
    date: "2015-01-15",
    author: "Selkoe et al.",
    excerpt: "This study synthesizes scientific knowledge about marine ecosystem tipping points into seven practical principles for resource managers, based on evidence that explicitly addressing tipping points leads to improved management outcomes.",
    featuredImage: "/images/kelp-forest-fish-school-underwater.jpeg",
    tags: ["Publication","2015","Conservation","Management"],
    aliases: ["scientists-offer-blueprint-for-managing-ocean-ecosystems-on"],
    doiUrl: "https://doi.org/10.1890/EHS14-0024.1",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1RsV0IERxwPOtcFFpJeYkWsk0Hc8QY09E&usp=drive_fs",
    content: `This study synthesizes scientific knowledge about marine ecosystem tipping points into seven practical principles for resource managers, based on evidence that explicitly addressing tipping points leads to improved management outcomes. The researchers conducted five workshops in 2013 and 2014 with subsets of the coauthors and a dozen other scientists, marine managers, stewards, and policymakers to synthesize existing theory and case studies into actionable management principles, drawing from ecological resilience theory and marine system examples. Seven key principles emerged for managing tipping points: they are possible everywhere, are linked to intense human use, may be preceded by early-warning indicators, redistribute benefits among stakeholders, affect costs of action vs inaction, suggest biologically informed targets, and require adaptive monitoring. Over half of 736 quantified stressor-response relationships in marine systems were nonlinear, indicating widespread potential for threshold effects. Early action to preserve system resilience is likely more practical, affordable, and effective than late action to halt or reverse a tipping point. Management strategies that monitor ecosystem state and identify measurable tipping points tend to be more effective in achieving conservation goals than strategies that ignore possible tipping points. The research provides a practical framework for marine managers to anticipate and respond to large ecosystem changes that can be socially, culturally, and economically costly, offering a path toward more effective conservation in an era of intensifying human impacts and climate change.

## Citation

Selkoe, Kimberly A.; Blenckner, Thorsten; Caldwell, Margaret R.; Crowder, Larry B.; Erickson, Ashley L.; Essington, Timothy E.; Estes, James A.; Fujita, Rod M.; Halpern, Benjamin S.; Hunsicker, Mary E.; Kappel, Carrie V.; Kelly, Ryan P.; Kittinger, John N.; Levin, Phillip S.; Lynham, John M.; Mach, Megan E.; Martone, Rebecca G.; Mease, Lindley A.; Salomon, Anne K.; Samhouri, Jameal F.; Scarborough, Courtney; Stier, Adrian C.; White, Crow; Zedler, Joy (2015). Principles for managing marine ecosystems prone to tipping points. *Ecosystem Health and Sustainability*.

[Read the full paper](https://doi.org/10.1890/EHS14-0024.1)

*This paper is Open Access.*`,
  },
  {
    slug: "axolotl-regeneration-declines-after-metamorphosis",
    title: "Axolotl Regeneration Declines After Metamorphosis",
    date: "2014-01-15",
    author: "Monaghan et al.",
    excerpt: "Scientists induced metamorphosis in axolotls (salamanders that normally remain aquatic their whole lives) to test whether the transformation affects their legendary ability to regenerate lost limbs. They found that metamorphosis reduces regeneration speed by half and causes limb defects.",
    featuredImage: "/images/axolotl.JPG",
    tags: ["Publication","2014"],
    aliases: ["axolotls-lose-their-superpower-when-they-transform-into-land"],
    doiUrl: "https://doi.org/10.1002/reg2.8",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1RO77g1kvd18rIxLWxU3ypMyPRfd6LJ9h&usp=drive_fs",
    content: `Scientists induced metamorphosis in axolotls (salamanders that normally remain aquatic their whole lives) to test whether the transformation affects their legendary ability to regenerate lost limbs. They found that metamorphosis reduces regeneration speed by half and causes limb defects. Researchers used axolotls, which can be artificially induced to undergo metamorphosis as adults using thyroxine hormone. They compared limb regeneration between age-matched axolotls that remained aquatic (paedomorphic) versus those that underwent metamorphosis, controlling for body size and age. Metamorphosis caused a twofold reduction in regeneration rate. Body size had no effect on regeneration rate in adult axolotls. Metamorphic axolotls developed carpal and digit malformations during regeneration. Metamorphic blastemal cells showed lower proliferative rates and took longer to traverse the cell cycle. The research helps explain why most animals lose their ability to regenerate body parts as they develop, potentially showing key mechanisms that could be targeted to promote regeneration in other animals, including humans. Understanding what restricts regeneration could inform regenerative medicine approaches.

## Citation

Monaghan, James R.; Stier, Adrian C.; Michonneau, François; Smith, Matthew D.; Pasch, Bret; Maden, Malcolm; Seifert, Ashley W. (2014). Experimentally induced metamorphosis in axolotls reduces regenerative rate and fidelity. *Regeneration*.

[Read the full paper](https://doi.org/10.1002/reg2.8)

*This paper is Open Access.*`,
  },
  {
    slug: "harvesting-herring-eggs-can-reduce-food-web-impacts-relative",
    title: "Harvesting Herring Eggs Can Reduce Food-Web Impacts Relative to Adult Fisheries",
    date: "2014-01-15",
    author: "Shelton et al.",
    excerpt: "Researchers studied how different ways of fishing Pacific herring affect both the fish populations and the seabirds, whales, and other predators that depend on them for food. They found that harvesting herring eggs has much less impact on herring populations than catching adult fish.",
    featuredImage: "/images/fishing-boat-seagulls-rocky-coast.jpeg",
    tags: ["Publication","2014","Management","Predator-Prey"],
    aliases: ["fishing-for-herring-eggs-beats-catching-adults-for-ocean-hea"],
    doiUrl: "https://doi.org/10.1038/srep07110",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1S-F4rVBQ4D5DuIvpQfbwc8DgjFWaKOp2&usp=drive_fs",
    content: `This study examines how different ways of fishing Pacific herring affect both the fish populations and the predators that depend on them for food. Along the coasts of British Columbia and Alaska, fishers target the same herring populations in two completely different ways: some catch spawning adults, while others harvest the eggs those adults produce. We built stochastic, age-structured models that could simulate herring populations over 40 years under different combinations of egg and adult harvest. We tracked how various fishing intensities affected herring biomass, catch amounts, and whether populations stayed above thresholds needed to sustain seabirds, marine mammals, and other herring predators. What the study found was a large asymmetry between the two fishing approaches. High adult harvest rates (above 0.50) could push mean spawning biomass below the fishery closure limit, while egg harvest didn't have this severe effect until harvest rates exceeded 70-90%. Even then, mean biomass always exceeded 10,000 metric tons until egg harvest exceeded 90%. The trade-offs were equally striking: slightly increasing adult harvest caused large declines in egg catch, but egg harvest had relatively minor effects on adult catch. What struck us most was how our findings challenged conventional thinking about ecosystem-based fisheries management. We expected that ecosystem thresholds designed to protect herring predators would impose the strictest constraints on fishing. Instead, the study found that conventional fishery closure rules, designed simply to avoid depleting the herring themselves, were often more restrictive than ecosystem considerations. These results matter because Pacific herring exemplify a global challenge in marine conservation. Forage fish like herring are nexus species, central to marine food webs and heavily targeted by fisheries. Global estimates suggest forage fish are worth twice as much to other fisheries as they are to the forage fisheries themselves.

## Citation

Shelton, Andrew Olaf; Samhouri, Jameal F.; Stier, Adrian C.; Levin, Philip S. (2014). Assessing trade-offs to inform ecosystem-based fisheries management of forage fish. *Scientific Reports*.

[Read the full paper](https://doi.org/10.1038/srep07110)

*This paper is Open Access.*`,
  },
  {
    slug: "coral-dwelling-predators-can-influence-reef-responses-to-cli",
    title: "Coral-Dwelling Predators Can Influence Reef Responses to Climate Change",
    date: "2014-01-15",
    author: "Stier et al.",
    excerpt: "Researchers studied how predatory fish affect the tiny, less visible creatures living inside coral colonies, finding that predators substantially reduce the abundance and diversity of beneficial animals that help corals survive.",
    featuredImage: "/images/flame-hawkfish.jpg",
    tags: ["Publication","2014","Predator-Prey","Coral","Mutualism"],
    aliases: ["tiny-predators-living-inside-corals-could-determine-which-re"],
    doiUrl: "https://doi.org/10.1007/s00338-013-1077-2",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1S1qmMMgIU1hP5w8fq0myRSEcg8EUgZ4F&usp=drive_fs",
    content: `this study shows how predatory fish affect the tiny, less visible creatures living inside coral colonies. The study found that predators substantially reduce the abundance and diversity of beneficial animals that help corals survive. We surveyed 93 coral colonies to map natural predator distributions, then conducted a controlled experiment with 60 Pocillopora eydouxi coral colonies. We removed all small animals using a low concentration of anesthetic (0.02% clove oil) to minimize coral stress, transplanted them to a sandy lagoon floor, and added different combinations of two predator species, flame hawkfish and coral crouchers, to test their effects. Our results were stark. The study found that predators reduced the total abundance of fish and crustacean prey by 34% and cut species richness by 20%. Rarefaction analysis showed that observed reductions in species richness were primarily driven by changes in abundance, predators weren't just removing certain species, they were suppressing the entire community. Each predator species affected community composition differently, creating unique patterns of winners and losers among the prey. Most concerning was how substantially predators affected the mutualist species, the beneficial crabs, shrimp, and small fish that help corals survive. We know that certain Trapezia crabs and Alpheus shrimp defend corals against crown-of-thorns seastars, clear away sediment, and remove harmful mucus-producing snails. Damselfish provide oxygen and nutrients. This matters because coral performance depends heavily on both the density and diversity of these mutualist communities. Our findings suggest that the density and identity of predators present within corals may substantially alter coral performance in the face of increased frequency and intensity of natural and anthropogenic stressors.

## Citation

Stier, A. C.; Leray, M. (2014). Predators alter community organization of coral reef cryptofauna and reduce abundance of coral mutualists. *Coral Reefs*.

[Read the full paper](https://doi.org/10.1007/s00338-013-1077-2)`,
  },
  {
    slug: "reef-fish-predators-reduce-prey-abundance-without-strong-spe",
    title: "Reef Fish Predators Reduce Prey Abundance Without Strong Species Selection",
    date: "2014-01-15",
    author: "Stier et al.",
    excerpt: "Researchers measured how predator density affects the rate at which reef fish predators consume their prey, finding that individual predators become less effective hunters when more predators are present.",
    featuredImage: "/images/schooling-jacks-fish-underwater.jpeg",
    tags: ["Publication","2014","Predator-Prey","Coral"],
    aliases: ["reef-fish-predators-are-surprisingly-fair-hunters-new-analys"],
    doiUrl: "https://doi.org/10.1007/s00338-013-1096-z",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1PmJB59Rfiw4cDBGVRYh2__Mh2Q5hKUfs&usp=drive_fs",
    content: `We challenged the common assumption that predators act independently: if one shark eats ten fish per day, do two sharks eat twenty? But on coral reefs, research by Adrian Stier and Wilson White shows this simple math doesn't hold. When predators cluster on the same patch of reef, each individual becomes a less effective hunter. We conducted experiments manipulating the density of predatory fish on coral reef patches. By controlling predator numbers and measuring how many prey each consumed, they could calculate what ecologists call the functional response: the relationship between prey availability and predation rate. Their focus was on how this relationship changed when multiple predators hunted the same area. Our results showed clear predator interference. Per-capita predation rates declined as predator density increased. A single predator consumed prey at a higher rate than the same predator would achieve when hunting alongside others. Multiple predators together caught fewer total prey than you'd predict by multiplying single-predator rates. Several mechanisms could explain this interference. Predators might compete directly for prey, with one predator's attack scaring away targets that another was stalking. They might waste time monitoring each other rather than hunting. Or prey might become more vigilant when multiple predators are present, making all hunters less successful. This predator interference has consequences for reef dynamics. If predator effects don't simply add up, then models predicting reef community structure need to account for these non-linear effects. The interference could also stabilize predator-prey dynamics: as predator populations grow, per-capita hunting success declines, potentially preventing predators from driving prey populations to extinction. The findings challenge simple assumptions about predation on reefs and highlight the complexity of multi-predator systems. Understanding these dynamics becomes increasingly important as reef communities shift under fishing pressure and climate change, altering the abundance and diversity of predators on reefs worldwide.

## Citation

Stier, A. C.; White, J. W. (2014). Predator density and the functional responses of coral reef fish. *Coral Reefs*.

[Read the full paper](https://doi.org/10.1007/s00338-013-1096-z)`,
  },
  {
    slug: "predators-and-habitat-shape-reef-fish-communities-independen",
    title: "Predators and Habitat Shape Reef Fish Communities Independently",
    date: "2014-01-15",
    author: "Stier et al.",
    excerpt: "Scientists conducted a field experiment in French Polynesia to test how predatory fish and habitat characteristics independently affect coral reef fish communities, finding that predators and habitat size have separate effects on fish diversity and abundance.",
    featuredImage: "/images/overwater-bungalows-split-view-reef-fish.jpeg",
    tags: ["Publication","2014","Predator-Prey","Coral","Conservation"],
    aliases: ["predators-and-habitat-shape-reef-fish-communities-in-surpris"],
    doiUrl: "https://doi.org/10.1890/12-1441.1",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1PePYxFPREF5LErevVtsWHu4CUsr9ljZ_&usp=drive_fs",
    content: `Scientists conducted a field experiment in French Polynesia to test how predatory fish and habitat characteristics independently affect coral reef fish communities, finding that predators and habitat size have separate effects on fish diversity and abundance. The researchers conducted field surveys and a factorial experiment on coral patch reefs in Moorea, French Polynesia, manipulating the presence of grouper predators and varying habitat patch sizes and fragmentation patterns to measure effects on fish communities. Groupers reduced prey fish abundance by 50% and overall diversity by 45%, with rare species hit harder than common ones. Predators and habitat characteristics had independent effects; they didn't interact with each other as theory predicted. Larger habitat patches contained more fish, but doubling patch size only increased abundance by 36%. Fragmented patches had 50% higher species richness compared to unfragmented patches of the same total area. The research shows that natural and human-caused changes to reef habitats affect fish communities through two independent pathways, predator abundance and habitat structure, suggesting that conservation strategies need to address both predation pressure and habitat fragmentation separately rather than assuming they interact.

## Citation

Stier, Adrian C.; Hanson, Katharine M.; Holbrook, Sally J.; Schmitt, Russell J.; Brooks, Andrew J. (2014). Predation and landscape characteristics independently affect reef fish community organization. *Ecology*.

[Read the full paper](https://doi.org/10.1890/12-1441.1)`,
  },
  {
    slug: "isolated-coral-reefs-can-have-high-predator-to-prey-ratios",
    title: "Isolated Coral Reefs Can Have High Predator-to-Prey Ratios",
    date: "2014-01-15",
    author: "Stier et al.",
    excerpt: "Researchers studied coral reef fish communities across 35 locations in the Pacific Ocean and discovered that isolated reefs have unusually high ratios of predators to prey fish, the opposite of what happens in most ecosystems where predators disappear first from remote areas.",
    featuredImage: "/images/aerial-view-island-lagoon-barrier-reef.jpeg",
    tags: ["Publication","2014","Predator-Prey","Coral"],
    aliases: ["remote-coral-reefs-defy-ecology-rules-with-surprisingly-high"],
    doiUrl: "https://doi.org/10.1038/ncomms6575",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1Q470bFdnijQ0tjne2h1nCRw45WiItLNT&usp=drive_fs",
    content: `Researchers studied coral reef fish communities across 35 locations in the Pacific Ocean and discovered that isolated reefs have unusually high ratios of predators to prey fish, the opposite of what happens in most ecosystems where predators disappear first from remote areas. Researchers analyzed published species lists from 35 major coral reef fish communities across the Pacific Ocean, classified 1,350 species as either top predators or prey based on diet, and developed a mathematical model incorporating larval dispersal duration to predict colonization patterns. Species-poor communities from isolated islands have three times as many predator species per prey species as near-shore communities. Predator species richness remains relatively stable across habitats while prey species richness declines rapidly with increasing isolation. Predator fish larvae spend 28% longer in the dispersive stage than prey fish larvae (38.1 vs 28.3 days on average). The predator-prey ratio varies among islands by a factor of 3, ranging from 0.34 to 1.1 predator species per prey species. The research challenges fundamental assumptions about how ecosystems collapse and suggests that coral reef predators may be more resilient to habitat fragmentation than previously thought, which could inform marine conservation strategies and our understanding of how species composition changes across ocean scales.

## Citation

Stier, Adrian C.; Hein, Andrew M.; Parravicini, Valeriano; Kulbicki, Michel (2014). Larval dispersal drives trophic structure across Pacific coral reefs. *Nature Communications*.

[Read the full paper](https://doi.org/10.1038/ncomms6575)

*This paper is Open Access.*`,
  },
  {
    slug: "ecological-simulations-need-effect-sizes-not-significance-te",
    title: "Ecological Simulations Need Effect Sizes, Not Significance Tests",
    date: "2014-01-15",
    author: "White et al.",
    excerpt: "Using statistical significance tests to interpret computer simulation models can produce misleading p-values that change with the number of simulations run. The researchers argue scientists should focus on the size of differences between model scenarios instead of statistical significance.",
    featuredImage: "/images/rocky-tidepool-coastline-sunset.jpg",
    tags: ["Publication","2014","Models"],
    aliases: [],
    doiUrl: "https://doi.org/10.1111/j.1600-0706.2013.01073.x",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1QCDP72DWr55PdWBqt4z4GfwbN8Y7eOaO&usp=drive_fs",
    content: `Ecologists are misusing statistical significance tests when analyzing computer simulation models, producing meaningless p-values that can be manipulated by simply running more simulations. The researchers argue scientists should focus on the actual size of differences between model scenarios instead of statistical significance. The authors reviewed recent ecological literature to identify cases where researchers used statistical tests (like ANOVA) on simulation model outputs, then analyzed why this practice is problematic using statistical theory and specific published examples. Statistical power in simulations can be arbitrarily high since researchers can run unlimited replications, making p-values meaningless. Null hypotheses in model comparisons are known to be false before testing begins, invalidating the premise of the statistical test. With 24,000 simulation runs, researchers can produce extremely small p-values regardless of biological effect size. Focus should shift to quantifying effect sizes and biological significance rather than statistical significance. The research addresses a fundamental methodological problem in ecological modeling that could lead to incorrect conclusions about ecosystem dynamics and management decisions if researchers continue misinterpreting simulation results.

## Citation

White, J. Wilson; Rassweiler, Andrew; Samhouri, Jameal F.; Stier, Adrian C.; White, Crow (2014). Ecologists should not use statistical significance tests to interpret simulation model results. *Oikos*.

[Read the full paper](https://doi.org/10.1111/j.1600-0706.2013.01073.x)

*This paper is Open Access.*`,
  },
  {
    slug: "illegal-shark-fishing-in-the-gal-pagos-marine-reserve-docume",
    title: "Illegal Shark Fishing in the Galápagos Marine Reserve Documented",
    date: "2013-01-15",
    author: "Carr et al.",
    excerpt: "Researchers documented the illegal catch found aboard a shark fishing vessel seized in the Galápagos Marine Reserve, showing 379 sharks from seven species, with 89% being juveniles and 64% female.",
    featuredImage: "/images/blacktip-reef-shark-swimming.jpg",
    tags: ["Publication","2013","Conservation"],
    aliases: [],
    doiUrl: "https://doi.org/10.1016/j.marpol.2012.12.005",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1QZ1drzDH-XFlTMreKXYZnyAiCU3baz8h&usp=drive_fs",
    content: `Researchers documented the illegal catch found aboard a shark fishing vessel seized in the Galápagos Marine Reserve, showing 379 sharks from seven species, with 89% being juveniles and 64% female. The team examined and measured every shark found aboard an illegal fishing vessel seized by Ecuadorian authorities in the Galápagos Marine Reserve in July 2011, identifying species, sex, and size of each animal. 379 sharks from seven species were found aboard the illegal vessel, dominated by pelagic thresher sharks (303 individuals). 89% of all sharks caught were juveniles, well below reproductive maturity. 64% of the catch was female, creating a skewed sex ratio harmful to population recovery. The vessel was equipped with long line fishing gear and had systematically removed heads and fins from many sharks. The research provides rare quantitative evidence of illegal shark fishing's severe impact on vulnerable species in supposedly protected areas, demonstrating that current enforcement is inadequate to protect important shark populations from commercial exploitation.

## Citation

Carr, Lindsey A.; Stier, Adrian C.; Fietz, Katharina; Montero, Ignacio; Gallagher, Austin J.; Bruno, John F. (2013). Illegal shark fishing in the Galápagos Marine Reserve. *Marine Policy*.

[Read the full paper](https://doi.org/10.1016/j.marpol.2012.12.005)`,
  },
  {
    slug: "juvenile-wrasse-competition-follows-a-size-based-hierarchy",
    title: "Juvenile Wrasse Competition Follows a Size-Based Hierarchy",
    date: "2013-01-15",
    author: "Geange et al.",
    excerpt: "Researchers tested competitive interactions among three juvenile coral reef fish species to understand whether competition follows a predictable hierarchy and how this affects community assembly on reefs.",
    featuredImage: "/images/fivestripewrasse.jpeg",
    tags: ["Publication","2013","Coral"],
    aliases: ["pecking-order-on-the-reef-competition-among-baby-wrasses-fol"],
    doiUrl: "https://doi.org/10.3354/meps10015",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1RDOXUttmzTUmFccxoEYX9KLuxCaRDpe9&usp=drive_fs",
    content: `We investigated whether competition between multiple species follows predictable mathematical patterns. Research by Shane Geange, Adrian Stier, and Jeffrey Shima tested this question among juvenile coral reef wrasses. We set up pairwise competition experiments on experimental reef patches in the tropical Pacific. They placed juveniles of three Thalassoma wrasse species in different combinations and monitored survival and growth over time. By comparing outcomes across all possible species pairs, they could determine whether competition followed a linear hierarchy or a more complex network. Our results showed a clear competitive hierarchy. One species consistently dominated, reducing survival and growth of both other species in pairwise trials. The middle-ranked species similarly outcompeted the lowest-ranked species. This linear ordering persisted across different experimental conditions. This matters because hierarchical and intransitive competition have different implications for species coexistence. Intransitive competition, where species form a competitive loop, can promote diversity because no single species can dominate everywhere. But strict hierarchies concentrate competitive advantage in one species, potentially leading to exclusion of weaker competitors unless other factors intervene. On natural reefs, the competitively inferior species still persist alongside the dominant one. This suggests that factors besides direct competition, like habitat partitioning, predation pressure, or variable recruitment, allow weaker competitors to find niches where they can survive. The competitive hierarchy sets the baseline interaction, but the reef's complexity creates refuges. Understanding these competitive relationships becomes increasingly important as reef conditions change. If climate change or disturbance shifts the balance among these factors, the underlying competitive hierarchy could become more determinative of community composition. Species that currently persist despite competitive inferiority might lose the buffers that allow their coexistence.

## Citation

Geange, Sw; Stier, Ac; Shima, Js (2013). Competitive hierarchies among three species of juvenile coral reef fishes. *Marine Ecology Progress Series*.

[Read the full paper](https://doi.org/10.3354/meps10015)

*This paper is Open Access.*`,
  },
  {
    slug: "predator-arrival-timing-reshapes-reef-fish-communities",
    title: "Predator Arrival Timing Reshapes Reef Fish Communities",
    date: "2013-01-15",
    author: "Stier et al.",
    excerpt: "Scientists studying coral reef fish found that when predatory hawkfish arrive to colonize reefs matters just as much as how many show up, substantially changing which fish species survive and thrive in reef communities.",
    featuredImage: "/images/hawkfish-on-coral.jpeg",
    tags: ["Publication","2013","Coral"],
    aliases: ["timing-is-everything-when-predator-fish-arrive-at-coral-reef"],
    doiUrl: "https://doi.org/10.1890/11-1983.1",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1Q0xBHh5AGkeZnpXZYfKLqncp3hvR4yod&usp=drive_fs",
    content: `Scientists studying coral reef fish found that when predatory hawkfish arrive to colonize reefs matters just as much as how many show up, substantially changing which fish species survive and thrive in reef communities. Researchers first surveyed 192 natural patch reefs in French Polynesia for five months to document hawkfish behavior patterns, then conducted field experiments using artificial reefs to test how timing and density affected fish community development. Hawkfish presence reduced prey fish abundance by 50% compared to reefs without predators. Doubling hawkfish density caused an additional 33% reduction in prey abundance beyond the initial 50%. Late-arriving hawkfish caused a 34% additional reduction in prey compared to early arrivals. Predator timing affected community composition and increased diversity differences between patches by 22%, even though it didn't change species richness within patches. The research shows that the timing of predator colonization can be as important as predator density in shaping entire reef communities, suggesting that conservation efforts need to consider not just how many predators are present, but when they arrive relative to their prey.

## Citation

Stier, Adrian C.; Geange, Shane W.; Hanson, Kate M.; Bolker, Benjamin M. (2013). Predator density and timing of arrival affect reef fish community assembly. *Ecology*.

[Read the full paper](https://doi.org/10.1890/11-1983.1)`,
  },
  {
    slug: "a-recruitment-pulse-preceded-a-fish-mortality-event-in-frenc",
    title: "A Recruitment Pulse Preceded a Fish Mortality Event in French Polynesia",
    date: "2013-01-15",
    author: "Stier et al.",
    excerpt: "Marine biologists documented two rare mass die-off events of surgeonfish in French Polynesia following exceptional recruitment pulses, where hundreds of newly settled fish developed white lesions and died, suggesting disease rather than predation as the cause of mortality.",
    featuredImage: "/images/surgeonfish-settlers.JPG",
    tags: ["Publication","2013","Coral"],
    aliases: ["mystery-disease-kills-hundreds-of-fish-after-rare-ocean-baby"],
    doiUrl: "https://doi.org/10.2984/67.4.4",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1Ps810gnS2zkD8IHYS2n7WfF584rGhAjf&usp=drive_fs",
    content: `We witnessed something extraordinary in February 2006 in the lagoons of Moorea: striped bristletooth surgeonfish had arrived as juveniles in an episodic settlement event. Within days, hundreds of these fish were lying dead on the sandy bottom, their bodies marked by distinctive white lesions. We had been tracking fish populations around this French Polynesian island for years, conducting biannual surveys at 26 sites to estimate fish abundance and size. Our data showed recruit densities were more than six times higher during the February events of 2006 and 2009 compared to typical counts of about 3 recruits per 50 square meters. But the aftermath was unlike anything described in the literature. Instead of finding evidence of predation, we documented fish lying dead or dying with large white lesions, particularly near their tails, along with decreased swimming ability and tattered fins. Most telling was what we didn't see: predators weren't immediately consuming the dead and dying fish, suggesting they may have been satiated or avoiding diseased prey. What struck us was the apparent selectivity of whatever was killing these fish. Only the surgeonfish showed symptoms, despite the lagoon being full of other species that should have been equally vulnerable to predators or environmental stressors. Both die-off events coincided with blooms of Lyngbya majuscula, a toxic cyanobacteria known to cause surgeonfish toxicity in Hawaii, but we had no way to test whether this was the culprit or coincidence. Our observations matter because they challenge a fundamental assumption about reef fish population dynamics. If disease outbreaks, rather than predation, drive mortality during recruitment pulses, it could change how we think about population bottlenecks and community structure on coral reefs.

## Citation

Stier, Adrian C.; Idjadi, Joshua A.; Geange, Shane W.; White, Jada-Simone S. (2013). High Mortality in a Surgeonfish Following an Exceptional Settlement Event. *Pacific Science*.

[Read the full paper](https://doi.org/10.2984/67.4.4)`,
  },
  {
    slug: "model-structure-can-bias-estimates-in-predator-studies",
    title: "Model Structure Can Bias Estimates in Predator Studies",
    date: "2012-01-15",
    author: "McCoy et al.",
    excerpt: "Scientists discovered that common methods used to study how multiple predators affect prey survival are systematically biased, leading to overestimation of predator interactions in ecological studies. The bias occurs because current methods assume predators maintain constant feeding rates, but in reality feeding rates change as prey become depleted during experiments.",
    featuredImage: "/images/manta-ray-silhouette-underwater.JPG",
    tags: ["Publication","2012","Predator-Prey"],
    aliases: ["decades-of-predator-studies-may-be-wrong-due-to-flawed-mathe"],
    doiUrl: "https://doi.org/10.1111/ele.12005",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1RTBjCF53CsqFf6GgmGXuP1kh39Zc368v&usp=drive_fs",
    content: `Scientists discovered that common methods used to study how multiple predators affect prey survival are systematically biased, leading to overestimation of predator interactions in ecological studies. The bias occurs because current methods assume predators maintain constant feeding rates, but in reality feeding rates change as prey become depleted during experiments. The researchers used mathematical modeling to simulate predation experiments, comparing results from the standard 'Multiplicative Risk Model' used by ecologists with more realistic models that account for prey depletion and nonlinear predator feeding responses over time. The standard Multiplicative Risk Model used in predator studies is biased because it assumes constant feeding rates, but real predators have nonlinear responses that change as prey are depleted. Studies using additive experimental designs were more likely to incorrectly conclude 'risk enhancement' (predators working together kill more prey than expected). Studies using substitutive designs usually incorrectly concluded 'risk reduction' (predators working together kill fewer prey than expected). On average, prey were depleted by 70% over the course of experiments in 100 multiple predator studies they examined. The research suggests that decades of ecological studies may have overestimated how often predators interact in meaningful ways, potentially leading to incorrect conclusions about food web dynamics and ecosystem management strategies. The findings affect how we understand predator-prey relationships that form the foundation of marine and terrestrial food webs.

## Citation

McCoy, Michael W.; Stier, Adrian C.; Osenberg, Craig W. (2012). Emergent effects of multiple predators on prey survival: the importance of depletion and the functional response. *Ecology Letters*.

[Read the full paper](https://doi.org/10.1111/ele.12005)`,
  },
  {
    slug: "coral-crabs-and-shrimp-combine-defenses-against-starfish",
    title: "Coral Crabs and Shrimp Combine Defenses Against Starfish",
    date: "2012-01-15",
    author: "McKeon et al.",
    excerpt: "Scientists discovered that two species of small crustaceans living on coral reefs work together in a synergistic partnership to defend their coral homes from predatory sea stars, with their combined efforts being more effective than the sum of their individual defensive abilities.",
    featuredImage: "/images/Arete indicus - ML.jpg",
    tags: ["Publication","2012","Mutualism","Coral"],
    aliases: ["tiny-coral-bodyguards-team-up-for-super-powered-defense-agai"],
    doiUrl: "https://doi.org/10.1007/s00442-012-2275-2",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1RcKwNv3l-kYqMJlthVveQEl609tZxt--&usp=drive_fs",
    content: `Scientists discovered that two species of small crustaceans living on coral reefs work together in a synergistic partnership to defend their coral homes from predatory sea stars, with their combined efforts being more effective than the sum of their individual defensive abilities. Researchers conducted controlled experiments in French Polynesia, manipulating the presence of two crustacean species (Trapezia crabs and Alpheus shrimp) on coral colonies and exposing them to predatory sea stars to measure defensive effectiveness. The presence of mutualists reduced predation frequency by 15% and coral tissue consumption by 45%. When both crustacean species were present together, they reduced coral tissue loss by 73%. This 73% reduction was significantly greater than the 38% reduction expected if the two species worked independently. The synergistic defense represents an emergent 'multiple defender effect' analogous to multiple predator effects in ecology. The research shows that coral reef conservation may depend on protecting entire communities of mutualist species, not just individual partnerships, as the synergistic effects of multiple defenders could be important for coral survival in increasingly threatened reef ecosystems.

## Citation

McKeon, C. Seabird; Stier, Adrian C.; McIlroy, Shelby E.; Bolker, Benjamin M. (2012). Multiple defender effects: synergistic coral defense by mutualist crustaceans. *Oecologia*.

[Read the full paper](https://doi.org/10.1007/s00442-012-2275-2)`,
  },
  {
    slug: "axolotl-regeneration-declines-after-metamorphosis-2",
    title: "Axolotl Regeneration Declines After Metamorphosis",
    date: "2012-01-15",
    author: "Seifert et al.",
    excerpt: "This review examines why some animals can regenerate lost limbs and appendages while others cannot, exploring how fundamental traits like body size, age, metabolic rate, and life history influence regenerative capacity across the animal kingdom.",
    featuredImage: "/images/axolotl.jpeg",
    tags: ["Publication","2012"],
    aliases: [],
    doiUrl: "https://doi.org/10.1111/j.1469-185X.2011.00199.x",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1Rlmh8Uk1ENpPHLb-rOqQ2BOlAlhoAfqk&usp=drive_fs",
    content: `We examined one of the most compelling questions in evolutionary biology: why some animals can regenerate injured structures while others cannot. We synthesized decades of research across the animal kingdom, looking for patterns that might explain the patchy distribution of regenerative ability. What emerged was a complex picture where regeneration isn't simply present or absent, but varies in degree and changes throughout an animal's life. Within single species, regenerative capacity often declines with age and body size, or can be lost entirely during major life transitions. One striking example comes from axolotls, the famous regenerating salamanders. These animals can regrow limbs, tails, and even parts of their hearts and brains. But when axolotls undergo metamorphosis and transform into their terrestrial adult form, they lose much of this regenerative capacity. This observation suggests that the traits enabling regeneration may be incompatible with other physiological demands of adult life. The study found that smaller body size and higher metabolic rates often correlate with greater regenerative capacity. This relationship hints at possible trade-offs between regeneration and other energetically costly processes like growth and reproduction. Animals investing heavily in rapid reproduction, for instance, may have fewer resources available for maintaining regenerative machinery. These patterns raise provocative questions about human regeneration. Humans retain some regenerative capacity, being able to heal wounds and regenerate liver tissue, but cannot regrow limbs. Understanding what molecular and cellular mechanisms have been lost or suppressed could potentially inform medical approaches to enhance tissue repair. The review also highlighted how much remains unknown. Why did some lineages lose regeneration while closely related species retained it? What specific genes and developmental pathways control this ability? As genetic tools become more powerful, researchers may be able to answer these questions and perhaps one day unlock latent regenerative potential in species, including humans, that have lost this unusual ability.

## Citation

Seifert, Ashley W.; Monaghan, James R.; Smith, Matthew D.; Pasch, Bret; Stier, Adrian C.; Michonneau, François; Maden, Malcolm (2012). The influence of fundamental traits on mechanisms controlling appendage regeneration. *Biological Reviews*.

[Read the full paper](https://doi.org/10.1111/j.1469-185X.2011.00199.x)`,
  },
  {
    slug: "multiple-coral-dwelling-cleaners-improve-sediment-removal",
    title: "Multiple Coral-Dwelling Cleaners Improve Sediment Removal",
    date: "2012-01-15",
    author: "Stier et al.",
    excerpt: "Researchers studied how multiple species of crabs and shrimp living on coral reefs work together to keep their coral homes clean by removing harmful sediment, finding that more species of cleaners leads to cleaner corals.",
    featuredImage: "/images/red-spotted-coral-crab-macro.jpeg",
    tags: ["Publication","2012","Coral","Mutualism"],
    aliases: ["coral-housekeepers-multiple-species-of-cleaners-keep-reefs-s"],
    doiUrl: "https://doi.org/10.1371/journal.pone.0032079",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1PB7HJWHODJyEUtImtqQ47-ev10MEM6EG&usp=drive_fs",
    content: `Researchers studied how multiple species of crabs and shrimp living on coral reefs work together to keep their coral homes clean by removing harmful sediment, finding that more species of cleaners leads to cleaner corals. Researchers surveyed coral colonies in French Polynesia to see which crabs and shrimp live together, then conducted controlled experiments adding different combinations of two species (Trapezia crabs and Alpheus shrimp) to corals and measuring how much sediment they removed overnight. Corals alone removed only 10% of sediment, but removal increased to 30% with two symbionts and 48% with four symbionts. The two main species (Trapezia crabs and Alpheus shrimp) co-occurred more often than expected by chance in natural colonies. Each symbiont's per-capita cleaning effect remained the same regardless of how many others were present; they worked independently. All common symbionts only occurred as pairs in nature, never at higher abundances, suggesting intraspecific competition limits density. As coastal development and storms increase sediment loads on coral reefs, understanding how coral cleaners work could inform conservation strategies. The research shows that coral health depends not just on having symbionts, but on maintaining diverse communities of different cleaning species.

## Citation

Stier, Adrian C.; Gil, Michael A.; McKeon, C. Seabird; Lemer, Sarah; Leray, Matthieu; Mills, Suzanne C.; Osenberg, Craig W. (2012). Housekeeping Mutualisms: Do More Symbionts Facilitate Host Performance?. *PLoS ONE*.

[Read the full paper](https://doi.org/10.1371/journal.pone.0032079)

*This paper is Open Access.*`,
  },
  {
    slug: "coastal-ecosystem-loss-carries-major-economic-costs",
    title: "Coastal Ecosystem Loss Carries Major Economic Costs",
    date: "2011-01-15",
    author: "Barbier et al.",
    excerpt: "Researchers conducted a review to understand what estuarine and coastal ecosystems are worth to humanity, finding that while economic valuations exist for some services like those provided by coral reefs and salt marshes, many important benefits from seagrass beds and sand dunes remain unvalued despite extensive global losses of these habitats.",
    featuredImage: "/images/tropical-beach-palm-trees-waves.JPG",
    tags: ["Publication","2011","Conservation"],
    aliases: ["scientists-reveal-massive-economic-value-in-disappearing-coa"],
    doiUrl: "https://doi.org/10.1890/10-1510.1",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1RhJxuIYkZ6TVuzdXTW-9jb0ld9Ax8NCt&usp=drive_fs",
    content: `Researchers conducted a review to understand what estuarine and coastal ecosystems are worth to humanity, finding that while economic valuations exist for some services like those provided by coral reefs and salt marshes, many important benefits from seagrass beds and sand dunes remain unvalued despite extensive global losses of these habitats. The researchers reviewed existing literature to catalog ecosystem services across five major coastal habitat types (marshes, mangroves, coral reefs, seagrass beds, and sand beaches/dunes) and compiled available economic valuation estimates for these services, focusing on how changes in these ecosystems affect human welfare. Global habitat loss has already occurred: 50% of salt marshes, 35% of mangroves, 30% of coral reefs, and 29% of seagrasses are either lost or degraded worldwide. This habitat loss has caused measurable declines in ecosystem services: 33% decline in viable fisheries, 69% decline in nursery habitats, and 63% decline in filtering and detoxification services. Economic valuations exist for some services from coral reefs, salt marshes, and mangroves, but many important services like erosion control and pollution control have not been reliably valued. Connectivity between coastal ecosystems produces synergistic benefits that are much more significant than services from any single ecosystem alone. The research provides the economic framework needed to justify coastal conservation investments and shows that society is losing significant ecosystem services. Because many services remain unvalued, current estimates likely understate the true cost of coastal habitat destruction.

## Citation

Barbier, Edward B.; Hacker, Sally D.; Kennedy, Chris; Koch, Evamaria W.; Stier, Adrian C.; Silliman, Brian R. (2011). The value of estuarine and coastal ecosystem services. *Ecological Monographs*.

[Read the full paper](https://doi.org/10.1890/10-1510.1)

*This paper is Open Access.*`,
  },
  {
    slug: "higher-coral-density-can-increase-growth-despite-more-predat",
    title: "Higher Coral Density Can Increase Growth Despite More Predators",
    date: "2011-01-15",
    author: "Shantz et al.",
    excerpt: "Researchers tested how coral colony density and predators affect coral growth by creating experimental reefs in a lagoon and found that both higher coral density and predator exclusion significantly boosted growth rates.",
    featuredImage: "/images/pufferfish.jpeg",
    tags: ["Publication","2011","Coral"],
    aliases: ["coral-safety-in-numbers-reef-builders-grow-faster-in-dense-n"],
    doiUrl: "https://doi.org/10.1007/s00338-010-0694-2",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1RsuvlmfKlkg9vzqT1vYiyoWjTwYph6VE&usp=drive_fs",
    content: `Researchers tested how coral colony density and predators affect coral growth by creating experimental reefs in a lagoon and found that both higher coral density and predator exclusion significantly boosted growth rates. Researchers placed concrete blocks in a lagoon to create experimental reefs, transplanted small Porites coral colonies at two different densities (2 vs 8 colonies per reef), used cages to exclude predators from half the reefs, and measured coral growth over 23 days. Predator exclusion increased coral growth by 20%. Higher coral density (8 vs. 2 colonies) increased growth by 30%. The effects of density and predation were independent; they didn't interact with each other. Higher coral densities attracted significantly more predators, but this didn't reduce the growth benefits. The research shows that coral colonies benefit from living in groups, which could inform coral restoration strategies and help predict how coral populations might respond to changes in reef density and predator communities.

## Citation

Shantz, A. A.; Stier, A. C.; Idjadi, J. A. (2011). Coral density and predation affect growth of a reef-building coral. *Coral Reefs*.

[Read the full paper](https://doi.org/10.1007/s00338-010-0694-2)`,
  },
  {
    slug: "arrival-timing-shapes-survival-for-young-coral-reef-fish",
    title: "Arrival Timing Shapes Survival for Young Coral Reef Fish",
    date: "2010-01-15",
    author: "Geange et al.",
    excerpt: "Researchers studied how the timing of when fish arrive at a reef and the complexity of their habitat affects competition between young coral reef fish, finding that early arrival gives fish a major survival advantage but only in simple habitats.",
    featuredImage: "/images/thalassoma-staring.jpeg",
    tags: ["Publication","2010","Coral"],
    aliases: ["late-to-the-party-coral-reef-fish-face-near-certain-death-wh"],
    doiUrl: "https://doi.org/10.1007/s00442-009-1554-z",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1QW57TYlz9HwPIvqFpjygzFea3N-SlqsD&usp=drive_fs",
    content: `Researchers studied how the timing of when fish arrive at a reef and the complexity of their habitat affects competition between young coral reef fish, finding that early arrival gives fish a major survival advantage but only in simple habitats. The researchers manipulated experimental coral reefs in French Polynesia, controlling when young wrasse arrived (simultaneously or 5 days apart) and the structural complexity of the habitat, then measured survival and aggressive behavior. Fish arriving simultaneously with competitors had 2.89-fold higher survival than those arriving 5 days later. Complex habitats increased survival by 1.55-fold, but only when fish arrived simultaneously or early. Habitat complexity had no effect on survival for late-arriving fish. Aggression from early residents toward newcomers was significantly higher when newcomers arrived 5 days late. The research shows that small differences in timing can have substantial effects on survival in competitive environments, which becomes increasingly important as climate change alters breeding seasons and settlement patterns of marine species.

## Citation

Geange, Shane Wallace; Stier, Adrian C. (2010). Priority effects and habitat complexity affect the strength of competition. *Oecologia*.

[Read the full paper](https://doi.org/10.1007/s00442-009-1554-z)`,
  },
  {
    slug: "microzooplankton-predators-can-intensify-toxic-algal-blooms",
    title: "Microzooplankton Predators Can Intensify Toxic Algal Blooms",
    date: "2010-01-15",
    author: "Geange et al.",
    excerpt: "Researchers discovered that tiny sea slugs called nudibranchs can indirectly increase toxic cyanobacterial blooms on coral reefs by preying on sea hares, the herbivores that would otherwise graze down the harmful bacteria.",
    featuredImage: "/images/seahare.JPG",
    tags: ["Publication","2010","Coral","Predator-Prey"],
    aliases: ["tiny-predators-make-toxic-algal-blooms-worse-by-eating-the-c"],
    doiUrl: "https://doi.org/10.1007/s00338-010-0606-5",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1RVz1OnswyuVKM-rsLjmkhLsl34HKjngU&usp=drive_fs",
    content: `Researchers discovered that tiny sea slugs called nudibranchs can indirectly increase toxic cyanobacterial blooms on coral reefs by preying on sea hares, the herbivores that would otherwise graze down the harmful bacteria. The researchers conducted laboratory experiments at a field station in French Polynesia, testing how nudibranchs consume sea hares at different densities and sizes, and measuring the indirect effects on cyanobacterial biomass through controlled feeding trials. Nudibranchs consumed an average of 2.4 sea hares per day, with small sea hares being eaten 22 times more often than large ones. When nudibranchs were present, cyanobacterial biomass was 1.5 times greater compared to when nudibranchs were absent. Nudibranch predation significantly reduced sea hare numbers, creating a trophic cascade that benefits the toxic cyanobacteria. The research shows that predation pressure can worsen toxic algal blooms on coral reefs by removing the herbivores that control them, suggesting that protecting grazer populations may be important for managing these increasingly frequent and harmful blooms that smother corals and irritate humans.

## Citation

Geange, S. W.; Stier, A. C. (2010). Charismatic microfauna alter cyanobacterial production through a trophic cascade. *Coral Reefs*.

[Read the full paper](https://doi.org/10.1007/s00338-010-0606-5)`,
  },
  {
    slug: "reef-predators-reduce-young-fish-across-species",
    title: "Reef Predators Reduce Young Fish Across Species",
    date: "2010-01-15",
    author: "Heinlein et al.",
    excerpt: "Researchers in French Polynesia found that predators substantially reduce both the number and variety of young coral reef fish by eating them indiscriminately soon after they settle on reefs, rather than targeting specific species.",
    featuredImage: "/images/bluefintrevally.jpeg",
    tags: ["Publication","2010","Predator-Prey","Coral"],
    aliases: ["reef-predators-act-like-lawnmowers-cutting-down-young-fish-i"],
    doiUrl: "https://doi.org/10.1007/s00338-010-0592-7",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1QqAPbD0DEe_dRgw-p3oLSCMnnZsLWa1B&usp=drive_fs",
    content: `Researchers in French Polynesia found that predators substantially reduce both the number and variety of young coral reef fish by eating them indiscriminately soon after they settle on reefs, rather than targeting specific species. The team built 21 artificial patch reefs in Moorea's lagoon and randomly assigned them to three treatments: caged reefs that excluded predators, uncaged reefs exposed to predators, and partial cage controls. They monitored fish recruitment over 54 days during the 2008 summer spawning season. Predators reduced recruit abundance by 74% compared to reefs where predators were absent. Species richness was 42% lower on reefs exposed to predators. Predators foraged non-selectively among species, affecting all families rather than targeting specific ones. The reduction in species diversity was caused by fewer total fish rather than selective predation on rare species. The research shows that predation can fundamentally alter coral reef fish community structure by indiscriminately reducing fish numbers soon after settlement. Understanding these community-level effects helps explain how predators shape the diversity patterns we see on coral reefs and could inform reef management strategies.

## Citation

Heinlein, J. M.; Stier, A. C.; Steele, M. A. (2010). Predators reduce abundance and species richness of coral reef fish recruits via non-selective predation. *Coral Reefs*.

[Read the full paper](https://doi.org/10.1007/s00338-010-0592-7)`,
  },
  {
    slug: "vermetid-snails-can-reduce-coral-growth-across-pacific-reefs",
    title: "Vermetid Snails Can Reduce Coral Growth Across Pacific Reefs",
    date: "2010-01-15",
    author: "Shima et al.",
    excerpt: "Researchers discovered that a little-studied snail called Dendropoma maximum severely damages reef-building corals, reducing their growth by up to 81% and survival by up to 52%. This overlooked species could be reshaping coral reef communities across the Indo-Pacific.",
    featuredImage: "/images/deadcoral.jpeg",
    tags: ["Publication","2010","Coral"],
    aliases: ["tiny-snails-are-secretly-devastating-coral-reefs-across-the-"],
    doiUrl: "https://doi.org/10.1098/rsbl.2010.0291",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1S-hafYLKE6Kd2mLSBTfeEjljq-4H_AEL&usp=drive_fs",
    content: `Researchers discovered that a little-studied snail called Dendropoma maximum severely damages reef-building corals, reducing their growth by up to 81% and survival by up to 52%. This overlooked species could be reshaping coral reef communities across the Indo-Pacific. The researchers conducted field surveys on 90 coral reefs in Moorea, French Polynesia, documenting the relationship between vermetid presence and coral health. They then performed controlled field experiments, transplanting coral fragments to reefs where they either removed all vermetids or left them at natural densities, measuring coral growth and survival over 7 months. Vermetids reduced coral skeletal growth by up to 81% and survival by up to 52% across four coral species. The presence of vermetids was strongly associated with flattened, stunted coral growth forms on natural reefs. Different coral species showed varying susceptibility to vermetid damage, suggesting these snails could alter coral community composition. Vermetid densities were positively correlated with dead coral substrate for three of four coral species studied. The research shows that an overlooked species may be a significant driver of coral reef decline at a time when reefs are already under severe stress from climate change and human activities. The finding that vermetids affect different coral species differently suggests they could be reshaping entire reef communities, potentially making some reefs less diverse or resilient.

## Citation

Shima, Jeffrey S.; Osenberg, Craig W.; Stier, Adrian C. (2010). The vermetid gastropod <i>Dendropoma maximum</i> reduces coral growth and survival. *Biology Letters*.

[Read the full paper](https://doi.org/10.1098/rsbl.2010.0291)

*This paper is Open Access.*`,
  },
  {
    slug: "reef-habitat-addition-can-redirect-fish-larvae-among-patches",
    title: "Reef Habitat Addition Can Redirect Fish Larvae Among Patches",
    date: "2010-01-15",
    author: "Stier et al.",
    excerpt: "Researchers tested whether adding new coral reef habitat attracts more fish larvae overall (like a 'field of dreams') or simply redirects them away from existing sites. They found evidence for both effects occurring simultaneously.",
    featuredImage: "/images/blue-green-chromis-coral-school.JPG",
    tags: ["Publication","2010"],
    aliases: ["baby-fish-choose-lonelier-reefs-over-crowded-neighborhoods-c"],
    doiUrl: "https://doi.org/10.1890/09-1993.1",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1OoorYJc7-DFjnvg8bykoQpGPsfqLWwUB&usp=drive_fs",
    content: `Researchers tested whether adding new coral reef habitat attracts more fish larvae overall (like a 'field of dreams') or simply redirects them away from existing sites. They found evidence for both effects occurring simultaneously. Researchers placed artificial coral reefs in pairs on sandy areas in Moorea, French Polynesia, with some pairs isolated and others surrounded by additional coral colonies. They monitored fish settlement daily for 28 days, removing settlers each day to focus purely on colonization patterns. Isolated reefs received 2-4 times more fish settlers than reefs with neighbors, proving larvae were redirected away from sites with more habitat nearby. Total settlement across all reefs increased only 1.3-fold despite a 6-fold increase in reef area, showing redirection was stronger than new recruitment. Mathematical modeling predicted that habitat addition increases fish populations primarily by reducing competition at existing sites rather than attracting new colonists. Four fish species showed consistent redirection patterns, representing 88% of all settlers observed during the study. The research challenges the common assumption that restoring habitat automatically increases wildlife populations. It suggests that habitat restoration may primarily help existing populations by reducing crowding rather than attracting new individuals, which has major implications for coral reef restoration and marine protected area design.

## Citation

Stier, Adrian C.; Osenberg, Craig W. (2010). Propagule redirection: Habitat availability reduces colonization and increases recruitment in reef fishes. *Ecology*.

[Read the full paper](https://doi.org/10.1890/09-1993.1)`,
  },
  {
    slug: "coral-guard-crabs-defend-reefs-from-corallivorous-snails",
    title: "Coral Guard Crabs Defend Reefs From Corallivorous Snails",
    date: "2010-01-15",
    author: "Stier et al.",
    excerpt: "Researchers found that small crabs living on coral reefs act as bodyguards, protecting their coral hosts from harmful mucus-producing snails that can reduce coral growth by 50%. The crabs completely eliminated the negative effects of the snails on coral growth.",
    featuredImage: "/images/coral-guard-crab-red-spotted-macro.jpeg",
    tags: ["Publication","2010","Symbiosis","Coral"],
    aliases: ["tiny-bodyguard-crabs-save-coral-reefs-from-slimy-attackers"],
    doiUrl: "https://doi.org/10.1007/s00338-010-0663-9",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1QOeao-MJL0JXc4FoO4v2nsrigxDOKU50&usp=drive_fs",
    content: `Researchers found that small crabs living on coral reefs act as bodyguards, protecting their coral hosts from harmful mucus-producing snails that can reduce coral growth by 50%. The crabs completely eliminated the negative effects of the snails on coral growth. The researchers conducted a 40-day field experiment in French Polynesia, manipulating the presence/absence of both vermetid snails and guard crabs on coral colonies to test their separate and combined effects on coral growth. Guard crabs completely eliminated the harmful effects of vermetid snails on coral growth. Without guard crabs, vermetids reduced coral growth rates by 50%. Guard crabs increased coral growth by 100% when vermetids were present. Guard crabs had no effect on coral growth when vermetids were absent. The research shows that tiny crabs may be important for coral reef resilience, especially as vermetid snail populations appear to be increasing. The findings suggest that protecting these crab-coral partnerships could help preserve important reef habitat for fish and other marine life.

## Citation

Stier, A. C.; McKeon, C. S.; Osenberg, C. W.; Shima, J. S. (2010). Guard crabs alleviate deleterious effects of vermetid snails on a branching coral. *Coral Reefs*.

[Read the full paper](https://doi.org/10.1007/s00338-010-0663-9)`,
  },
  {
    slug: "scale-and-habitat-shape-variation-in-fish-crowding-studies",
    title: "Scale and Habitat Shape Variation in Fish Crowding Studies",
    date: "2010-01-15",
    author: "White et al.",
    excerpt: "This paper synthesizes mechanisms that create density-dependent mortality in reef fishes, examining how behavior, habitat structure, and the scale of observation all influence whether and how strongly crowding affects survival.",
    featuredImage: "/images/dascyllus-damselfish-coral.jpeg",
    tags: ["Publication","2010"],
    aliases: ["why-fish-crowding-studies-get-such-different-results-scale-a"],
    doiUrl: "https://doi.org/10.1890/09-0298.1",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1Q3og1LVm2kPRAQCesI9V8bbLFgeSgVAK&usp=drive_fs",
    content: `We examined density dependence, the phenomenon where population growth slows as populations become crowded. But studies of reef fishes have produced wildly variable results, sometimes finding strong density dependence and sometimes finding none at all. In this synthesis, Wilson White, Jameal Samhouri, Adrian Stier, Clare Wormald, Scott Hamilton, and Stuart Sandin tackled this puzzle. The key insight from Our work is that density dependence isn't a fixed property of a species but emerges from interactions between fish behavior, habitat configuration, and how scientists make Our observations. Different experimental designs at different scales can yield completely different conclusions about the same fish populations. Consider how habitat configuration matters. On isolated coral heads, fish have limited options for where to hide from predators. As density increases, some individuals get pushed to suboptimal positions and suffer higher mortality. But on larger reef systems with more refuges, the same species might show much weaker density dependence because crowded fish can simply move to nearby unoccupied patches. Predator behavior adds another layer of complexity. If predators focus their hunting on areas of high prey density, this generates strong density-dependent mortality. But if predators are territorial and spread their effort evenly across space, density dependence weakens. We showed how these behavioral mechanisms interact with habitat to produce the variable patterns seen in field studies. The observational scale problem is particularly important for management. Studies conducted on small patches may detect strong density dependence that disappears when the same population is measured across a whole reef. Conversely, broad-scale studies may miss density-dependent dynamics that operate at local scales. Neither perspective is wrong, but failing to match the scale of observation to the scale of management can lead to poor predictions. This synthesis provides a roadmap for designing better studies and making more accurate predictions about how reef fish populations will respond to environmental change. As coral reefs face increasing threats from climate change and habitat loss, understanding what regulates fish populations becomes ever more important for effective conservation and management.

## Citation

White, J. Wilson; Samhouri, Jameal F.; Stier, Adrian C.; Wormald, Clare L.; Hamilton, Scott L.; Sandin, Stuart A. (2010). Synthesizing mechanisms of density dependence in reef fishes: behavior, habitat configuration, and observational scale. *Ecology*.

[Read the full paper](https://doi.org/10.1890/09-0298.1)`,
  },
  {
    slug: "common-fish-anesthetic-shows-limited-short-term-effects-on-c",
    title: "Common Fish Anesthetic Shows Limited Short-Term Effects on Coral Hosts",
    date: "2009-01-15",
    author: "Boyer et al.",
    excerpt: "Researchers tested whether clove oil, a commonly used fish anesthetic, harms corals when used to collect fish from coral colonies. They found that typical field concentrations caused temporary stress responses but did not affect coral survival or growth over the study period.",
    featuredImage: "/images/green-coral-polyps.jpeg",
    tags: ["Publication","2009","Coral"],
    aliases: ["common-fish-anesthetic-doesn-t-harm-coral-hosts-study-finds"],
    doiUrl: "https://doi.org/10.1016/j.jembe.2008.10.020",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1QsNItSXvXFKm9B9DNBiDwq02QZPhCbWS&usp=drive_fs",
    content: `We addressed a question marine biologists often face: when they need to collect small fish living in coral colonies using clove oil. The active ingredient, eugenol, anesthetizes the fish, which float out of the coral branches and can be safely collected. But Sarah Boyer, Jeremy White, Adrian Stier, and Craig Osenberg wondered: what happens to the coral? The concern is legitimate. Corals are already stressed by warming oceans, acidification, and pollution. Adding another stressor from research activities could potentially harm the very systems scientists are trying to study and protect. We designed experiments to test whether typical field concentrations of clove oil cause lasting damage to coral colonies. In both laboratory tanks and field experiments in Moorea, French Polynesia, they exposed Pocillopora corals to clove oil at various concentrations. The corals responded immediately, retracting their polyps and producing excess mucus, clear signs of stress. At higher concentrations, these responses were more severe. But within hours, the corals had recovered, extending their polyps and resuming normal behavior. The important question was whether these acute stress responses translated into long-term harm. We monitored coral growth and survival over weeks and found no significant effects from the clove oil exposures. Corals that had been stressed showed the same growth rates and survival as unexposed controls. These findings provide reassurance for the coral reef research community. Fish-coral interactions are a hot topic in reef ecology, and collecting resident fish without harming their coral hosts is essential for many studies. This study suggests that clove oil, used responsibly at typical field concentrations, does not appear to cause lasting damage. We note some caveats. Our study focused on short-term exposures and healthy corals. Corals already stressed by other factors might respond differently. And while survival and growth were unaffected, more subtle effects on coral physiology could exist. Still, for researchers weighing whether to use clove oil in their fieldwork, our study provides valuable evidence that the practice is unlikely to compromise coral health.

## Citation

Boyer, S.E.; White, J.S.; Stier, A.C.; Osenberg, C.W. (2009). Effects of the fish anesthetic, clove oil (eugenol), on coral health and growth. *Journal of Experimental Marine Biology and Ecology*.

[Read the full paper](https://doi.org/10.1016/j.jembe.2008.10.020)`,
  },
  {
    slug: "early-arrival-gives-reef-fish-a-competitive-advantage",
    title: "Early Arrival Gives Reef Fish a Competitive Advantage",
    date: "2009-01-15",
    author: "Geange et al.",
    excerpt: "Researchers found that the timing of when young reef fish arrive at a coral reef substantially affects their chances of survival, with fish that arrive earlier gaining a competitive advantage over later arrivals through increased aggression and territory control.",
    featuredImage: "/images/wrasse-6bar.jpeg",
    tags: ["Publication","2009"],
    aliases: ["first-come-first-served-reef-fish-that-arrive-early-dominate"],
    doiUrl: "https://doi.org/10.1890/08-0630.1",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1QbeCX2ga0H5B7Gaug1ikbt4h4vQrUwYu&usp=drive_fs",
    content: `Researchers found that the timing of when young reef fish arrive at a coral reef substantially affects their chances of survival, with fish that arrive earlier gaining a competitive advantage over later arrivals through increased aggression and territory control. The researchers created experimental patch reefs in French Polynesia and experimentally controlled when young wrasse fish arrived, manipulating both the sequence (who came first) and timing (how much time separated arrivals) to measure survival and aggressive interactions. Both fish species survived best when they had no competitors, but when competitors were present, they did best arriving at the same time. Survival declined as each species entered progressively later than its competitor, with increased aggression from the earlier-arriving fish. The competitive advantage was about timing, not species identity; whichever species arrived first gained the advantage. Even within the same species, earlier arrivals had similar competitive advantages over later arrivals. The research shows that small differences in timing, just days or weeks, can determine which fish survive to adulthood on coral reefs. This has implications for understanding how coral reef communities assemble and how unpredictable ocean currents that deliver baby fish might affect reef diversity.

## Citation

Geange, Shane W.; Stier, Adrian C. (2009). Order of arrival affects competition in two reef fishes. *Ecology*.

[Read the full paper](https://doi.org/10.1890/08-0630.1)`,
  },
  {
    slug: "crown-of-thorns-starfish-can-also-shelter-small-reef-fish",
    title: "Crown-of-Thorns Starfish Can Also Shelter Small Reef Fish",
    date: "2009-01-15",
    author: "Stier et al.",
    excerpt: "Small reef fish use crown-of-thorns starfish as habitat, sheltering among their venomous spines despite the starfish's role as a destructive coral predator. This shows unexpected ecological complexity in interactions with 'pest' species.",
    featuredImage: "/images/crown-of-thorns.jpeg",
    tags: ["Publication","2009","Coral"],
    aliases: ["coral-s-worst-enemy-also-serves-as-fish-shelter-nature-s-iro"],
    doiUrl: "https://doi.org/10.1007/s00338-008-0445-9",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1PCbMyF2sjw6RuSb6BJMsaa_KV-f8YXLu&usp=drive_fs",
    content: `We documented reef fish using crown-of-thorns starfish as habitat. While surveying starfish in Moorea, we repeatedly observed small fish sheltering among the venomous spines. The creature famous for destroying coral habitat was serving as habitat itself. Crown-of-thorns seastars devastate reefs, their outbreaks leave bleached coral skeletons across the Pacific. Yet small juvenile fish were darting in and out of the deadly spines like they'd found a mobile shelter. The irony compounds: as the starfish eats coral and destroys fish habitat, it becomes temporary replacement habitat. The venomous spines that make crown-of-thorns dangerous provide a defensive barrier that tiny fish exploit. Small juveniles dominated the fish we documented associating with starfish, exactly the size class most vulnerable to predation in open water. They stayed among the spines rather than fleeing across open substrate when approached. Ecological reality resists tidy narratives of villains and victims. The destroyer also provides services. This matters less for practical management, nobody will cultivate crown-of-thorns as fish habitat, than for understanding that reef ecosystems involve complexity that defies simple stories.

## Citation

Stier, Adrian C.; Steele, Mark A.; Brooks, Andrew J. (2009). Coral reef fishes use crown-of-thorns seastar as habitat. *Coral Reefs*.

[Read the full paper](https://doi.org/10.1007/s00338-008-0445-9)

*This paper is Open Access.*`,
  },
];
