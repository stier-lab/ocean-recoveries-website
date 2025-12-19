export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  featuredImage: string;
  tags: string[];
  content: string;
  doiUrl?: string;
  openAccess?: boolean;
  pdfUrl?: string;
}

export const posts: BlogPost[] = [
  {
    slug: "fish-populations-don-t-follow-simple-rules-and-that-changes-",
    title: "Fish Populations Don't Follow Simple Rules—And That Changes Everything We Thought We Knew",
    date: "2025-12-18",
    author: "Stier et al.",
    excerpt: "This meta-analysis of 38 reef fish species across 56 studies reveals that the strength of density-dependent mortality varies dramatically both within and among species, challenging our understanding of how fish populations are regulated.",
    featuredImage: "/images/barracuda-school-underwater-blue.jpg",
    tags: ["Publication","2025"],
    doiUrl: "https://doi.org/10.1111/ele.70262",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1u1irOFvUhBBwtxh5U5lyzpS5tVJz_n16&usp=drive_fs",
    content: `For decades, ecologists have searched for universal rules governing how animal populations grow and decline. One of the most fundamental assumptions is density dependence: as populations become crowded, competition and predation should intensify, pushing mortality rates higher and keeping populations in check. But when Craig Osenberg and I synthesized data from 56 studies spanning 38 reef fish species, we discovered something troubling—these rules don't apply consistently.

Our meta-analysis yielded 147 separate estimates of density-dependent mortality, mostly in young fish just settling onto reefs. The variation we found was staggering. Within single species, the strength of density dependence often varied by several orders of magnitude. In some cases, the effect even changed sign—meaning crowding sometimes helped survival rather than harming it. This wasn't random noise; something fundamental was causing these dramatic swings.

Several factors emerged as key drivers of this variation. Predators played an outsized role: when predators were present or abundant, density-dependent mortality intensified considerably. This makes biological sense—crowded groups of young fish may be easier targets or may deplete hiding spots faster. We also found that species traits mattered. Fish that typically arrive on reefs at low densities, or those destined to grow large, experienced stronger density-dependent mortality.

These findings have profound implications for how we manage and conserve marine fish populations. Most fisheries models assume density dependence operates predictably, allowing depleted populations to bounce back as fishing pressure eases. But if density dependence is as variable as our data suggest, recovery trajectories become much harder to predict. A reef with different predator communities, or experiencing different environmental conditions, might see very different population dynamics.

Perhaps most importantly, our results underscore how much context matters. The same species might experience strong density dependence in one location and weak or even reversed effects nearby. Future research needs to move beyond simply detecting density dependence toward understanding the environmental and biological factors that modulate its strength. Only then can we build the predictive models that conservation and management demand.

## Citation

Stier, Adrian C.; Osenberg, Craig W. (2025). Widespread Heterogeneity in Density-Dependent Mortality of Nearshore Fishes. *Ecology Letters*.

[Read the full paper](https://doi.org/10.1111/ele.70262)`,
  },
  {
    slug: "climate-change-forces-an-impossible-choice-for-fisheries-sav",
    title: "Climate Change Forces an Impossible Choice for Fisheries: Save the Fish or Save the Jobs?",
    date: "2025-12-18",
    author: "Samhouri et al.",
    excerpt: "This modeling study reveals a fundamental trade-off in fisheries management under climate change: strategies that protect fish populations often reduce harvest, while strategies maximizing harvest can leave populations vulnerable.",
    featuredImage: "/images/hurricane-earth-from-space.jpeg",
    tags: ["Publication","2025","Climate","Management","Conservation"],
    doiUrl: "https://doi.org/10.1371/journal.pclm.0000624",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1JeG8bGu9DqB7YVVcym8XkgfAdL6vpIdl&usp=drive_fs",
    content: `Climate change is reshaping our oceans in ways that challenge everything we know about managing fisheries. As waters warm and ecosystems shift, fish populations are responding—sometimes thriving, sometimes struggling. For managers charged with both protecting fish stocks and supporting fishing communities, the question becomes urgent: how do we adapt?

In collaboration with colleagues at NOAA's Northwest Fisheries Science Center, we built a model to explore this dilemma. We simulated a fish population experiencing climate-driven changes in its basic biology—its growth rate, its reproductive capacity, the number of fish the environment can support. Then we asked: what happens when managers try to adapt to these changes versus sticking with traditional approaches?

The results reveal a troubling trade-off. When we modeled a climate-adaptive management strategy—one that updates catch limits based on new information about how climate has changed fish populations—we found it generally kept fish populations healthier. Biomass remained higher, providing a buffer against future shocks. But this protection came at a cost: harvests were often similar to or lower than what traditional management would allow.

Conversely, managers who ignore climate impacts and stick to historical practices might maintain or even increase short-term catches. But this approach risks depleting populations that are already stressed by changing conditions. It's a classic tension between immediate economic benefits and long-term sustainability, intensified by climate uncertainty.

What makes this particularly challenging is that climate change doesn't affect all populations the same way. When climate increases a population's carrying capacity, adaptive management can sometimes achieve both goals—healthier populations and stable harvests. But when climate reduces productivity, something has to give. Managers, fishing communities, and policymakers will increasingly face these difficult choices as climate change accelerates.

Our findings don't prescribe a single right answer—that depends on societal values and priorities. But they do clarify the trade-offs involved, helping managers and stakeholders make more informed decisions about how to navigate fisheries management in an uncertain climate future.

## Citation

Samhouri, Jameal F.; Detmer, A. Raine; Marshall, Kristin N.; Stier, Adrian C.; Berger, Aaron; Liu, Owen R.; Shelton, A. Ole (2025). Course corrections responding to climate impacts produce divergent effects on population biomass and harvest in fisheries. *PLOS Climate*.

[Read the full paper](https://doi.org/10.1371/journal.pclm.0000624)

*This paper is Open Access.*`,
  },
  {
    slug: "fish-are-providing-life-saving-services-to-corals-and-scient",
    title: "Fish Are Providing Life-Saving Services to Corals—And Scientists Are Just Beginning to Understand How",
    date: "2025-12-16",
    author: "Stier et al.",
    excerpt: "This review paper synthesizes how certain fish species that live closely with corals provide vital services to their coral hosts, including enhanced oxygenation, nutrient delivery, sediment removal, and protection from predators and diseases.",
    featuredImage: "/images/chromis-acropora.jpeg",
    tags: ["Publication","2025","Symbiosis","Coral"],
    doiUrl: "https://doi.org/10.1007/s00338-025-02647-4",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1s57zCfPWOFHnLOLfWo1SQEt5WvTKN-wY&usp=drive_fs",
    content: `When my colleagues Tory Chase, Craig Osenberg, and I began reviewing decades of research on coral-fish relationships, we discovered something remarkable: the fish weren't just taking from their coral homes—they were giving back in measurable ways. In one striking example, damselfish increased their host coral's photosynthesis by 3-6% simply through their swimming movements, creating vital water flow during daylight hours.

We wanted to understand how coral-associated fishes—species that maintain close relationships with live coral structures—actually benefit their hosts. Rather than conduct new experiments, we synthesized existing research to reveal patterns that individual studies might miss. We focused on fish that spend significant time with corals, from obligate coral dwellers like damselfishes and gobies to facultative species like grunts and snappers that use corals for shelter.

The numbers told a compelling story. Grunt schools foraging away from reefs at night but sheltering near corals during the day increased nitrogen and phosphorus concentrations around their host corals by tenfold. This nutrient boost led to 75% increases in growth of Acropora cervicornis. In another study spanning 13 months, corals hosting resident damselfish showed approximately 37% greater growth in skeletal surface area compared to fishless corals. Fish also provide important sediment removal services that benefit coral health.

What surprised us most was how context-dependent these relationships proved to be. In areas with high nitrogen concentrations and high flow, the positive relationship between fish density and coral growth was actually reversed. We also found paradoxical patterns at different scales—beneficial effects observed in small-scale studies didn't always scale up to reef-wide surveys.

These findings matter because coral reefs face unprecedented threats from climate change, pollution, and overfishing. Understanding how fish-coral partnerships work could help us harness these natural relationships to enhance restoration efforts. If fish truly help buffer corals against environmental stressors, protecting these partnerships becomes as important as protecting the corals themselves.

Yet we're still scratching the surface of how these relationships function. We need more mechanistic understanding of when fish help versus harm their coral hosts, and how factors like coral morphology, water chemistry, and fish density interact. The future of coral restoration may depend not just on replanting corals, but on ensuring the right fish communities are there to support them.

## Citation

Stier, Adrian C.; Chase, Tory J.; Osenberg, Craig W. (2025). Fish services to corals: a review of how coral-associated fishes benefit corals. *Coral Reefs*.

[Read the full paper](https://doi.org/10.1007/s00338-025-02647-4)`,
  },
  {
    slug: "tiny-bodyguard-crabs-take-on-giant-starfish-to-save-coral-re",
    title: "Tiny Bodyguard Crabs Take On Giant Starfish to Save Coral Reefs",
    date: "2024-06-15",
    author: "Stier et al.",
    excerpt: "This paper describes coral guard crabs in the family Trapeziidae, small crustaceans that live symbiotically within branching corals in the tropical Pacific Ocean, protecting their hosts from predators and sediment while being completely dependent on the coral for survival.",
    featuredImage: "/images/trapezia-coral-crab-hiding.jpg",
    tags: ["Publication","2024","Symbiosis","Coral","Climate","Predator-Prey"],
    doiUrl: "https://doi.org/10.1016/j.cub.2023.10.067",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1To0L_2GipgvHlqLfXexs6iY1wzU6Lgf5&usp=drive_fs",
    content: `The remarkable world of coral guard crabs represents one of nature's most unlikely partnerships. These small Trapeziid crabs live their entire lives within the branches of cauliflower corals in the tropical Pacific, turning coral protection into a specialized art form.

Our research on these crab-coral partnerships has revealed how small crustaceans can defend their coral homes against threats many times their size. These crabs fearlessly attack predators much larger than themselves, using their powerful claws to shove sea stars and pinch their tube feet. The crabs don't just fight off predators - they're meticulous housekeepers too, constantly removing sediment from coral surfaces. When we removed crabs from corals in coastal regions with high sedimentation rates, the corals died, but when crabs were present, the corals survived. The over 20 species of Trapeziid crabs have evolved this mutualism so completely that they cannot survive outside their coral hosts.

What makes these partnerships particularly important is how they create protective effects that extend beyond individual coral colonies. The crabs generate 'halos' of protection around their host corals, creating zones of reduced predation pressure that benefit nearby corals and the fish and invertebrates that depend on them. However, our research has also revealed troubling vulnerability - in experiments simulating future climate conditions, increased water temperature caused reductions in crab abundance and egg production, and even caused crabs to expel their mates and other defensive partners.

This research matters because these partnerships represent a critical but often overlooked component of coral reef resilience. As coral reefs face unprecedented threats from climate change, understanding every mechanism that helps corals survive becomes essential. The decline in crab densities and defensive behavior under warming conditions could further accelerate coral reef collapse, underscoring the urgent need for dramatic reductions in global carbon emissions to protect not just corals, but the intricate web of relationships that sustain them.

Many questions remain about these remarkable partnerships. How do different crab species coordinate their defenses? What determines which corals get the best protection? And most urgently - can we find ways to support these crab-coral mutualisms as ocean conditions continue to change? The fate of these small bodyguards may be more intertwined with the future of coral reefs than we ever imagined.

## Citation

Stier, Adrian C.; Osenberg, Craig W. (2024). Coral guard crabs. *Current Biology*.

[Read the full paper](https://doi.org/10.1016/j.cub.2023.10.067)`,
  },
  {
    slug: "how-fish-and-crabs-work-together-to-keep-coral-reefs-healthy",
    title: "How Fish and Crabs Work Together to Keep Coral Reefs Healthy",
    date: "2024-06-15",
    author: "Stier et al.",
    excerpt: "This is a quick guide explaining how small coral guard crabs (Trapeziidae family) protect their coral hosts from predators and sediment, creating a mutually beneficial relationship that helps maintain coral reef ecosystems.",
    featuredImage: "/images/trapezia-coral-crab-red-spotted.jpg",
    tags: ["Publication","2024","Symbiosis","Coral","Climate","Predator-Prey"],
    doiUrl: "https://doi.org/10.1016/j.cub.2024.05.071",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1_ZhkTPhOsBwk9A2eGL-KiRbatUNEx5Fd&usp=drive_fs",
    content: `Trapeziid crabs represent a remarkable example of mutualistic relationships in coral reef ecosystems. These small crustaceans live exclusively within the branches of cauliflower corals and other branching species in the tropical Pacific, often as male-female pairs, and cannot survive outside their coral homes.

Our research has revealed that these crabs serve dual roles as both defenders and housekeepers for their coral hosts. They attack predators like crown-of-thorns sea stars and pincushion stars - voracious corallivores that can devastate reefs - using their powerful claws to shove the predators and pinch their tube feet. They also defend against grazing snails like Drupella cornus and Coralliophila violacea. Beyond defense, the crabs constantly remove sediment from coral surfaces, and this housekeeping proves critical for coral survival. When we remove crabs from corals in coastal regions with high sedimentation rates, the corals die, but when crabs are present, the corals survive.

Climate change poses new threats to these partnerships. In our experiments simulating future climate conditions, increased water temperature reduced crab abundance and egg production. The warming also caused crabs to expel their mates and other helpful crustaceans, suggesting that climate change could unravel these protective relationships even before the corals themselves succumb to bleaching.

Our research demonstrates how coral resilience depends on networks of relationships that extend beyond the coral organism itself. By protecting their hosts, these crabs create 'halos' of protection that benefit nearby corals and the fish and invertebrates that depend on them. The crabs' services typically greatly outweigh any costs from their feeding on coral tissue, making them net positive for reef health. Individual crabs vary in their defensive capabilities based on size, claw shape, and genetics, though the factors that determine defensive effectiveness remain areas for further research.

As climate change accelerates, understanding and protecting these mutualistic relationships becomes increasingly important for coral conservation efforts and maintaining the diversity of coral reef ecosystems.

## Citation

Stier, Adrian C.; Osenberg, Craig W. (2024). How fishes and invertebrates impact coral resilience. *Current Biology*.

[Read the full paper](https://doi.org/10.1016/j.cub.2024.05.071)`,
  },
  {
    slug: "spiny-lobsters-can-handle-some-ocean-warming-but-temperature",
    title: "Spiny Lobsters Can Handle Some Ocean Warming, But Temperature Extremes Prove Deadly",
    date: "2023-01-15",
    author: "Csik et al.",
    excerpt: "Scientists studied how temperature affects both the metabolism and predation rates of California spiny lobsters, finding that lobsters can actually increase their food consumption faster than their metabolic demands rise—but only within a middle range of temperatures.",
    featuredImage: "/images/spiny-lobsters-group-reef-hideout.jpeg",
    tags: ["Publication","2023","Climate","Predator-Prey"],
    doiUrl: "https://doi.org/10.3389/fmars.2023.1072807",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1-cHREoQ0iNe5KmNjBuIkVCkd_ue_TggN&authuser=astier@ucsb.edu&usp=drive_fs",
    content: `When we heated seawater to 26°C—near the upper limit of what California spiny lobsters experience in their southernmost range—a third of our test animals died. This stark result revealed just how narrow the thermal window might be for these iconic predators as oceans warm.

We wanted to answer a fundamental question about marine predators in a warming world: as temperatures rise and metabolism increases, can animals eat enough to fuel their higher energy demands? Working with 24 male spiny lobsters collected from Santa Barbara County kelp forests, we acclimated groups to four temperatures spanning their natural range: 11, 16, 21, and 26°C. After acclimation, we measured each lobster's oxygen consumption using respirometry chambers, then tested how many mussels they could consume.

What we found challenged our initial hypothesis. We expected metabolism to outpace consumption, potentially leaving lobsters in caloric deficit. Instead, rising temperatures caused lobster consumption rates to increase at a faster rate than increases in metabolic demand. In the middle range of temperatures, these predators appeared capable of ramping up their feeding to meet their heightened energy needs. The relationship between their absolute aerobic scope—the difference between maximum and resting metabolic rates—and their predation intensity suggested they had the physiological capacity to support increased hunting.

But the temperature extremes told a different story entirely. At 11°C, lobsters had almost no metabolic activity, essentially shutting down in the cold. At the other extreme, that 33% mortality rate at 26°C was impossible to ignore. The lobsters that survived showed they could theoretically meet their metabolic demands through increased consumption, but clearly something about that temperature pushed many individuals past their physiological limits.

Our results suggest temperature plays a key role in driving the geographic range of spiny lobsters, and that spatial and temporal shifts in temperature can critically alter the strength of species interactions. As both important predators in temperate reef ecosystems and economically valuable fishery species, spiny lobsters face a complex future. They might handle moderate warming by eating more, but temperature extremes could force range shifts or population declines.

Questions remain about what happens in real ocean conditions, where temperatures don't stay constant and prey availability fluctuates. Can lobsters maintain these higher consumption rates when faced with variable food supplies? And what exactly causes that lethal threshold at high temperatures? Until the physiological mechanisms behind thermal limits are better understood, predicting how these predators will navigate an increasingly warm ocean remains challenging.

## Citation

Csik, Samantha R.; DiFiore, Bartholomew P.; Kraskura, Krista; Hardison, Emily A.; Curtis, Joseph S.; Eliason, Erika J.; Stier, Adrian C. (2023). The metabolic underpinnings of temperature-dependent predation in a key marine predator. *Frontiers in Marine Science*.

[Read the full paper](https://doi.org/10.3389/fmars.2023.1072807)

*This paper is Open Access.*`,
  },
  {
    slug: "underwater-3d-photography-reveals-hidden-patterns-in-coral-g",
    title: "Underwater 3D Photography Reveals Hidden Patterns in Coral Growth and Marine Life",
    date: "2023-01-15",
    author: "Curtis et al.",
    excerpt: "Scientists used underwater 3D photography to measure coral colonies and found it provides more accurate measurements of coral growth and better predictions of which corals harbor the most diverse communities of fish and invertebrates compared to traditional measuring techniques.",
    featuredImage: "/images/cauliflower-coral-damselfish-reef.jpeg",
    tags: ["Publication","2023","Coral","Conservation"],
    doiUrl: "https://doi.org/10.1007/s00338-023-02367-7",
    openAccess: false,
    pdfUrl: "https://drive.google.com/file/d/1FHoXPnZ2CGCEzsN6XrIhf87Pd4pYAHvc/view?usp=share_link",
    content: `When we compared traditional measuring techniques to 3D photogrammetry, we found significant differences in how accurately each method captures coral growth and predicts biodiversity. Our study, conducted on 60 Pocillopora coral colonies in Moorea, French Polynesia, revealed that over a third of manual measurements suggested corals were shrinking over a 105-day period, while photogrammetric skeletal measurements showed zero instances of negative growth.

We wanted to determine which measurement method better captures coral growth patterns and predicts which colonies support the most diverse communities of fish and invertebrates. We measured each colony using both flexible tape to estimate length, width, and height, and underwater photography to create detailed 3D models.

Our results demonstrated clear advantages for photogrammetric measurements. Skeletal volume measurements had a standard deviation of only 9.99%, while manual ellipsoid measurements varied by 23.9% – more than twice as much. The 3D approach also provided better predictions of biodiversity, with skeletal volume measurements reducing prediction error by about 10% compared to manual estimates. All photogrammetric methods showed positive correlation with initial colony size, while manual measurements showed no correlation.

These findings have important implications for coral reef conservation. As coral reefs face unprecedented pressure from climate change, accurate monitoring tools are essential for tracking reef health and identifying which colonies support the most biodiversity. The ability to non-destructively measure skeletal volume could transform how scientists monitor reef recovery and target protection efforts.

Our research highlights both the potential and the challenges of implementing new technologies in marine ecology. While photogrammetry offers clear advantages in measurement accuracy and predictive power, scaling up these techniques to monitor thousands of colonies across entire reef systems remains a significant challenge for the conservation community.

## Citation

Curtis, Joseph S.; Galvan, Journ W.; Primo, Alexander; Osenberg, Craig W.; Stier, Adrian C. (2023). 3D photogrammetry improves measurement of growth and biodiversity patterns in branching corals. *Coral Reefs*.

[Read the full paper](https://doi.org/10.1007/s00338-023-02367-7)`,
  },
  {
    slug: "body-size-variation-drives-changes-in-lobster-urchin-interac",
    title: "Body Size Variation Drives Changes in Lobster-Urchin Interactions",
    date: "2023-01-15",
    author: "DiFiore et al.",
    excerpt: "Scientists studied how variation in body size affects the strength of interactions between lobsters and sea urchins across different spatial and temporal scales.",
    featuredImage: "/images/lobster-in-underwater-trap-cage.jpeg",
    tags: ["Publication","2023","Predator-Prey"],
    doiUrl: "https://doi.org/10.1111/1365-2656.13918",
    openAccess: false,
    pdfUrl: "https://drive.google.com/file/d/1K9NuYufF_rB-h6ROnkDEZ86oln9BTbIM/view?usp=share_link",
    content: `Understanding predator-prey relationships in marine ecosystems requires examining how various factors influence interaction strength. We investigated how body size variation affects the interactions between lobsters and sea urchins across different scales. Our research provides insights into how physical characteristics of organisms can influence ecological dynamics. The study contributes to our understanding of marine predator-prey relationships and how they vary in space and time. This research is important for predicting how marine ecosystems might respond to environmental changes that affect organism size distributions or predator-prey dynamics.

## Citation

DiFiore, Bartholomew P.; Stier, Adrian C. (2023). Variation in body size drives spatial and temporal variation in lobster–urchin interaction strength. *Journal of Animal Ecology*.

[Read the full paper](https://doi.org/10.1111/1365-2656.13918)`,
  },
  {
    slug: "dead-coral-skeletons-may-actually-harm-reef-recovery-by-shel",
    title: "Dead Coral Skeletons May Actually Harm Reef Recovery by Sheltering Competing Algae",
    date: "2023-01-15",
    author: "Kopecky et al.",
    excerpt: "Scientists used mathematical modeling to show that dead coral skeletons left behind by certain types of disturbances can actually make coral reefs more vulnerable to regime shifts from coral-dominated to algae-dominated states by providing shelter for competing algae.",
    featuredImage: "/images/bleach-coral.jpeg",
    tags: ["Publication","2023","Coral"],
    doiUrl: "https://doi.org/10.1002/ecy.4006",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1BtbzNUQ6W8m1CT-3Jo6zO9JEydrlDl9e&authuser=astier@ucsb.edu&usp=drive_fs",
    content: `We discovered something counterintuitive about how reefs recover from disasters: leaving dead structures behind might actually make recovery harder, not easier. We wanted to understand why some reefs bounce back quickly from disturbances while others seem to get stuck in degraded states dominated by algae instead of coral.

We focused on a key distinction between types of disasters. Some disturbances, like powerful storms, completely remove dead coral structures, leaving flat surfaces behind. Others, like marine heatwaves that cause bleaching, kill the coral tissue but leave the calcium carbonate skeletons standing. Using mathematical modeling, we tracked how benthic space holders change over time following these different disturbance types.

Our model revealed that dead coral skeletons could substantially diminish coral resilience if they provided macroalgae refuge from herbivory. The material legacy of dead skeletons broadened the range of herbivore biomass over which coral and macroalgae states are bistable. Those standing skeletons weren't just neutral—they were actively making it harder for herbivorous fish and sea urchins to keep algae in check by creating hiding spots for vulnerable young algae.

The skeletons effectively reduced the herbivores' capacity to control macroalgae without actually changing how many herbivores were present in the system. This refuge effect could be powerful enough to tip entire reef systems into algae-dominated states.

Our research is particularly relevant because disturbance regimes are changing. Structure-removing events like tropical storms appear to be increasing in intensity, while structure-retaining events like marine heat waves are becoming more widespread, frequent, and severe. Our findings suggest that reefs hit by bleaching events might be more vulnerable to permanent shifts than those hit by storms, even if the immediate coral mortality is similar. This could help explain some of the tremendous variability in resilience observed across coral reef ecosystems.

## Citation

Kopecky, Kai L.; Stier, Adrian C.; Schmitt, Russell J.; Holbrook, Sally J.; Moeller, Holly V. (2023). Material legacies can degrade resilience: Structure‐retaining disturbances promote regime shifts on coral reefs. *Ecology*.

[Read the full paper](https://doi.org/10.1002/ecy.4006)

*This paper is Open Access.*`,
  },
  {
    slug: "predators-may-actually-help-coral-reefs-by-eating-the-wrong-",
    title: "Predators May Actually Help Coral Reefs by Eating the 'Wrong' Fish",
    date: "2023-01-15",
    author: "Moeller et al.",
    excerpt: "Researchers used mathematical models to show that predators can sometimes help coral reefs by eating the wrong fish - specifically by consuming competitively dominant fish species that provide poor benefits to corals, allowing higher-quality mutualist fish to thrive instead.",
    featuredImage: "/images/damselfish-pair-acropora-coral.jpeg",
    tags: ["Publication","2023","Coral","Mutualism","Models","Conservation"],
    doiUrl: "https://doi.org/10.1002/ecs2.4382",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?authuser=astier%40ucsb.edu&id=1KjyXlLHc1Zq4DfqZ_7vxhFBtNJsUWmDd&usp=drive_fs",
    content: `We developed mathematical models to explore a paradox we observed in coral reefs around Moorea, French Polynesia. Hawkfish are the dominant competitors for space on branching Pocillopora corals, but corals hosting damselfish grow significantly faster than those with hawkfish.

We wanted to understand what happens when predators enter this equation. Both hawkfish and damselfish are eaten by transient predatory fish like the longface emperor, but at different rates. We built a mathematical model that tracked coral populations, the two competing fish species, and their predators over time.

Our model revealed something counterintuitive. When predators preferentially consume the competitively dominant hawkfish, they can reverse the outcome of competition, allowing the higher-quality damselfish to flourish instead. In these scenarios, predation creates cascading benefits that flow up to the coral hosts. The key insight is that the direction and strength of predator effects depend on asymmetries in mutualist competition, service provision, and predation vulnerability.

This challenges the conventional wisdom that predators always harm mutualisms by reducing mutualist abundance. Our model shows that sometimes predators can enhance host performance by consuming the less beneficial partners. Fish excrete nitrogen-rich waste products which are taken up by coral and transferred to photosynthetic algae, stimulating coral growth. Predation rates in Moorea are not well known and vary significantly across sites.

This has implications for coral reef conservation. As predators are removed from reefs through fishing and other human activities, this might inadvertently favor fish communities that provide fewer benefits to already-stressed corals. In an era of widespread coral decline, understanding these connections between predators and coral health could inform marine protected area management.

Our findings raise questions about broader implications across other ecosystems. How many other mutualisms are shaped by this kind of predator-mediated partner switching? And what happens when climate change shifts predator ranges and abundances? The web of interactions in nature is more intricate than previously understood.

## Citation

Moeller, Holly V.; Nisbet, Roger M.; Stier, Adrian C. (2023). Cascading benefits of mutualists' predators on foundation species: A model inspired by coral reef ecosystems. *Ecosphere*.

[Read the full paper](https://doi.org/10.1002/ecs2.4382)

*This paper is Open Access.*`,
  },
  {
    slug: "fish-roommates-may-actually-make-corals-more-vulnerable-to-b",
    title: "Fish Roommates May Actually Make Corals More Vulnerable to Bleaching",
    date: "2022-01-15",
    author: "Detmer et al.",
    excerpt: "Scientists used computer modeling to explore how fish living in coral colonies affect their host corals' ability to survive bleaching events. They found that while fish waste can promote coral growth, it can also make corals more vulnerable to bleaching under certain conditions.",
    featuredImage: "/images/damselfish-pair-pink-coral.jpeg",
    tags: ["Publication","2022","Climate","Symbiosis","Coral"],
    doiUrl: "https://doi.org/10.1016/j.jtbi.2022.111087",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1VTeIR-Zv66JOx7UVg7_cYenlwP9zxsoh&authuser=astier@ucsb.edu&usp=drive_fs",
    content: `When we investigated how coral-dwelling fish affect their hosts during bleaching events, we discovered something more complicated than expected. We found that the relationship between coral-dwelling fish and their hosts is a double-edged sword that could either help or harm corals depending on the circumstances.

We wanted to understand how the nitrogen that fish excrete affects whether corals bleach during heat stress. Many branching corals host families of damselfish and other small fish that rarely leave their coral homes. These fish produce waste that contains nitrogen, and previous work had shown that this fertilization can boost coral growth under normal conditions. But what happens during a bleaching event? We modified an existing dynamic energy budget model that tracks how energy and nutrients flow through the coral-algae partnership, adding equations to account for fish excretions and their effects on the nitrogen available to corals.

Our model predicted that fish-derived nitrogen does promote coral growth, just as earlier studies had shown. But we also found that this fertilization creates denser populations of the algae living inside corals. These algae provide some protection by shading the coral from harmful light, which should help prevent bleaching. However, our model revealed a troubling trade-off: these denser algal populations used more of their photosynthetic products for their own growth rather than sharing with the coral host, putting the coral at higher risk of becoming carbon-limited and bleaching. The balance between the benefits of increased shading and the costs of reduced carbon sharing depended on environmental conditions.

The effects were non-linear, meaning the relationship between fish presence and coral tolerance wasn't straightforward – sometimes fish helped, sometimes they hurt, and sometimes the effects were barely detectable. We also noted that our model focused on nitrogen effects and might be missing other important mechanisms by which fish could benefit corals, such as improving water flow or removing sediments.

These findings matter because coral reefs are facing unprecedented threats from marine heatwaves and bleaching events. If fish can sometimes make their coral hosts more vulnerable rather than more resilient, this could change how we think about coral conservation. It also suggests that the diverse communities of creatures living on reefs interact in ways that are far more complex than previously understood. The potentially harmful effects predicted by the model contrast with some empirical studies showing protective effects, highlighting gaps in current understanding.

The work raises important questions for future research. Field experiments are needed to test whether the model's predictions hold up in real coral colonies. Researchers also need to understand how other factors – like water flow, sediment removal, and protection from predators – might tip the balance toward fish being helpful rather than harmful. Each new discovery reveals how much remains to be understood about these intricate underwater partnerships.

## Citation

Detmer, A. Raine; Cunning, Ross; Pfab, Ferdinand; Brown, Alexandra L.; Stier, Adrian C.; Nisbet, Roger M.; Moeller, Holly V. (2022). Fertilization by coral-dwelling fish promotes coral growth but can exacerbate bleaching response. *Journal of Theoretical Biology*.

[Read the full paper](https://doi.org/10.1016/j.jtbi.2022.111087)

*This paper is Open Access.*`,
  },
  {
    slug: "only-3-of-world-s-large-predators-are-actually-recovering-gl",
    title: "Only 3% of World's Large Predators Are Actually Recovering, Global Study Reveals",
    date: "2022-01-15",
    author: "Ingeman et al.",
    excerpt: "Scientists analyzed 362 large carnivore species worldwide to understand which conservation strategies actually work, finding that fewer than 10% of populations are recovering and only 12 species have genuinely improved their extinction risk status.",
    featuredImage: "/images/CheetahFam-1.jpg",
    tags: ["Publication","2022","Recovery","Conservation"],
    doiUrl: "https://doi.org/10.1038/s41598-022-13671-7",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?authuser=astier%40ucsb.edu&id=1j7AncajkDuM-FAtl3yBUhyHUV66xXoo5&usp=drive_fs",
    content: `When my colleagues and I finished compiling our database of 362 large carnivore species from around the world, the numbers hit us like a cold wave. Fewer than 10% of global populations are increasing. Just 12 species—a mere 3.3%—have genuinely improved their extinction risk status. After decades of conservation efforts, this felt like a sobering wake-up call about how hard it is to bring back the world's top predators.

We wanted to flip the usual conservation narrative on its head. Instead of focusing on failures, my co-authors Lily Zhao, Christopher Wolf, Adrian Stier, and our team decided to hunt for the bright spots—the success stories that might teach us how to replicate recoveries elsewhere. We scoured IUCN databases, looking for large carnivores that function as terminal consumers in their ecosystems. These are the wolves, sharks, eagles, and whales that sit at the top of food chains and shape entire ecosystems through their presence or absence.

What we found was a tale of two conservation worlds. Marine mammals emerged as the clear winners, showing higher than expected numbers of species with both increasing population trends and genuine status improvements. Humpback whales and Steller sea lions exemplified these dramatic turnarounds. But sharks and rays told the opposite story—61% of species are threatened, with only 17% occupying the lowest extinction risk category. Meanwhile, terrestrial mammals fared poorly too, with fully half listed as threatened. We identified just one terrestrial mammal recovery: the Iberian lynx.

The geographic patterns surprised us most. The Nearctic region showed significantly higher recovery rates than other regions, while many species in the Afrotropic and Indo-Malay regions continue declining. This wasn't random. Our statistical models revealed that recovery was associated with species legislation at national and international levels, and with harvest management plans.

But here's what keeps me up at night: we still don't fully understand why some regions succeed while others struggle. The paper shows correlations, not causation. Many of our 'successful' regions had already lost their most sensitive species during Pleistocene extinctions, making current conservation appear more successful than it might actually be. And the IUCN data we relied on has gaps—conservation action fields are inconsistently completed, making it hard to draw definitive conclusions about what really works.

What's clear is that the handful of large carnivore recoveries we documented aren't accidents—they're the result of specific, intensive interventions. The challenge now is scaling these strategies globally while addressing the threats we identified: habitat modification and human-wildlife conflict. As ecosystems continue losing their top predators, we're running out of time to apply these hard-won lessons. The question isn't whether we can afford to invest in large carnivore recovery—it's whether we can afford not to.

## Citation

Ingeman, Kurt E.; Zhao, Lily Z.; Wolf, Christopher; Williams, David R.; Ritger, Amelia L.; Ripple, William J.; Kopecky, Kai L.; Dillon, Erin M.; DiFiore, Bartholomew P.; Curtis, Joseph S.; Csik, Samantha R.; Bui, An; Stier, Adrian C. (2022). Glimmers of hope in large carnivore recoveries. *Scientific Reports*.

[Read the full paper](https://doi.org/10.1038/s41598-022-13671-7)

*This paper is Open Access.*`,
  },
  {
    slug: "marine-reserves-pay-off-california-lobster-catches-surge-400",
    title: "Marine Reserves Pay Off: California Lobster Catches Surge 400% Near Protected Areas",
    date: "2022-01-15",
    author: "Lenihan et al.",
    excerpt: "Scientists compared spiny lobster populations around California marine reserves after 10 years of protection and found that reserves not only boosted lobster numbers inside by up to 465%, but also dramatically increased catches for fishers working just outside reserve boundaries.",
    featuredImage: "/images/lobster.jpeg",
    tags: ["Publication","2022","Management"],
    doiUrl: "https://doi.org/10.1002/ecs2.4110",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1h6m52Nzym0PJTG4kTdYVUMMIwVWS5lip&usp=drive_fs",
    content: `When we examined our scientific traps in 2018 near the borders of California's Channel Islands marine reserves, we found something remarkable: lobster catch rates had increased by nearly 400% compared to a decade earlier. This wasn't just conservation success—it was evidence that protecting ocean areas could actually boost fisheries.

Our study aimed to answer a contentious question that had divided fishers and conservationists for years: do marine reserves really benefit adjacent fisheries through 'spillover,' or do they simply lock up valuable fishing grounds? In 2003, California had established a network of no-take reserves around the Northern Channel Islands, removing about 20% of local spiny lobster fishing grounds. By 2008, we had already documented substantial lobster population increases within the reserves and hints of spillover. But would these benefits grow over time? We repeated our original study by placing scientific traps along spatial gradients extending from deep within two reserves to reference sites located more than 2 kilometers outside reserve borders.

Our results were striking. Legal-sized lobster abundance in traps had increased by 125% to 465% deep inside the reserves over the 10-year period. But more importantly for fishers, catch rates had jumped by 223% to 331% at sites near reserve borders and by nearly 400% just outside the borders. Similar dramatic increases in total lobster biomass were observed at both reserves. The spillover wasn't just happening—it was intensifying as lobster populations built up inside the protected areas.

The magnitude of the spillover effect and how it had grown over time was notable. We discuss two main spillover mechanisms: increased larval production by protected breeding populations, and juvenile and adult lobsters migrating out of reserves in search of food, habitat, or mates, or to avoid aggressive interactions.

This research matters because it provides rare long-term empirical evidence that marine reserves can deliver on their promise to benefit fisheries. The reserve network had initially removed fishing grounds from the local industry. Our findings suggest that patience paid off—protected populations rebuilt and began spilling over into fishing areas.

Many questions remain about how spillover varies across different species, habitats, and reserve designs, and whether spillover continues to increase indefinitely. Most importantly, more long-term studies are needed to truly understand how marine reserves function as fishery management tools.

## Citation

Lenihan, Hunter S.; Fitzgerald, Sean P.; Reed, Daniel C.; Hofmeister, Jennifer K. K.; Stier, Adrian C. (2022). Increasing spillover enhances southern California spiny lobster catch along marine reserve borders. *Ecosphere*.

[Read the full paper](https://doi.org/10.1002/ecs2.4110)

*This paper is Open Access.*`,
  },
  {
    slug: "scientists-crack-the-code-of-when-sea-urchins-destroy-kelp-f",
    title: "Scientists Crack the Code of When Sea Urchins Destroy Kelp Forests",
    date: "2022-01-15",
    author: "Rennick et al.",
    excerpt: "Scientists discovered that sea urchins cause devastating kelp forest collapse when their grazing overwhelms kelp production, but kelp detritus (dead kelp pieces) can prevent this collapse by feeding urchins and reducing their appetite for living kelp.",
    featuredImage: "/images/kelp_canopy.jpg",
    tags: ["Publication","2022","Conservation","Kelp"],
    doiUrl: "https://doi.org/10.1002/ecy.3673",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?authuser=astier%40ucsb.edu&id=1aV60WNbrmwNzmBe1ImLu0_LzXxh6MW5I&usp=drive_fs",
    content: `We wanted to solve a puzzle that has haunted marine ecologists for decades: why do some kelp forests coexist peacefully with sea urchins while others get completely obliterated, turning into underwater deserts called urchin barrens? We suspected the answer lay in the balance between how much kelp the forest produces and how much the urchins consume.

We designed feeding experiments using red and purple sea urchins collected from California's Santa Barbara Channel, testing eight different densities of purple urchins and six densities of red urchins in laboratory mesocosms during May-August 2019. The urchin biomass in our trials ranged from about 64 to 1,852 grams per square meter for purple urchins and 91 to 1,771 grams per square meter for red urchins, spanning the full range from healthy kelp forests to devastated barrens.

Our experiments revealed a stark threshold. When we calculated urchin grazing capacity and compared it to kelp production using 21 years of monitoring data, we found that sea urchins caused a 50-fold reduction in giant kelp biomass once their consumption exceeded production.

Our study revealed how kelp detritus—the dead pieces of kelp that drift around the ocean floor—may act as a buffer against deforestation. The leading hypothesis is that urchins passively forage on kelp detritus until changes in kelp production cause urchins to actively graze the living, standing kelp that forms the forest canopy.

These results matter because when kelp forests collapse into urchin barrens, the transformation can persist for decades and results in alternative states that provide fewer services to people and nature. Our research provides a tool to predict where and when these collapses might occur, potentially allowing intervention before it's too late.

Our study builds a mechanistic understanding of how density-dependent foraging and primary production interact to cause consumer-driven disturbances in temperate rocky reef ecosystems.

## Citation

Rennick, Mae; DiFiore, Bartholomew P.; Curtis, Joseph; Reed, Daniel C.; Stier, Adrian C. (2022). Detrital supply suppresses deforestation to maintain healthy kelp forest ecosystems. *Ecology*.

[Read the full paper](https://doi.org/10.1002/ecy.3673)

*This paper is Open Access.*`,
  },
  {
    slug: "urban-sprawl-has-surprising-effect-on-marine-life-in-pacific",
    title: "Urban Sprawl Has Surprising Effect on Marine Life in Pacific Northwest",
    date: "2022-01-15",
    author: "Samhouri et al.",
    excerpt: "Scientists studied how urbanization affects marine and freshwater ecosystems by comparing biodiversity and ecosystem functions across six pairs of urban and less-urban watersheds in Puget Sound, Washington. Surprisingly, they found that while freshwater biodiversity declined with urbanization, coastal marine biodiversity actually increased.",
    featuredImage: "/images/seattle-urban-coastline.jpeg",
    tags: ["Publication","2022","Conservation"],
    doiUrl: "https://doi.org/10.3389/fmars.2022.931319",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1lt_EPPWaTVwVbhUY3xkb57SRm4ciYamb&usp=drive_fs",
    content: `When we started collecting invertebrates from the bottoms of streams and nearshore waters around Puget Sound, we expected a straightforward story about urban decline. Instead, we found something that challenged assumptions about how cities affect the sea. While freshwater sites near developed areas had fewer and less diverse communities of bottom-dwelling creatures, the marine sites told the opposite story—they were actually more biodiverse near urban areas.

We wanted to understand how landscape-scale urbanization fundamentally alters ecosystem structure and function across the boundary between land and sea. Working across six pairs of coastal watersheds around Puget Sound—each pair containing one more urbanized and one less urbanized watershed—we measured biodiversity by counting and identifying families of epibenthic invertebrates, the small creatures that live on the bottom. We also measured ecosystem functions by tracking how much algae grew on artificial tiles and how quickly organic matter decomposed in mesh bags.

Our results split cleanly along the freshwater-marine divide. Greater upland urbanization was associated with greater reductions in freshwater biodiversity, measured as the density and evenness of epibenthic invertebrate families. But coastal marine biodiversity—measured using the same metrics—tended to be higher at more urbanized sites. We found no statistical association between urbanization and either freshwater or coastal marine ecosystem functions, estimated from changes in accumulated algal biomass on tiles and loss of biomass from litter bags. Surprisingly, there was no evidence that changes in ecosystem structure and function with urbanization were more severe in freshwater than coastal marine habitats.

What surprised us most was that marine biodiversity didn't just resist urban impacts—it seemed to benefit from them. We suggest this reflects the potential role of low to moderate levels of urbanization-related disturbance in determining coastal marine biodiversity patterns, though the mechanism remains unclear. We also expected the effects of terrestrial development to attenuate as we moved from land to freshwater to marine environments, but found no such gradient. The boundary between land and sea didn't seem to diminish the effects of landscape-scale urbanization the way we anticipated.

These findings matter enormously for species like Pacific salmon that depend on both freshwater and marine habitats throughout their life cycles. The biodiversity of invertebrate prey items for juvenile salmon in both environments is particularly important to early marine growth and survival. If urbanization is creating different pressures in connected habitats that salmon use, restoration efforts need to account for these complex, sometimes counterintuitive patterns. Our results suggest that attention to terrestrial, freshwater, and coastal marine systems in concert will produce more effective, ecosystem-based management.

We still don't fully understand why marine systems seem to benefit from moderate urban disturbance while connected freshwater systems decline. The processes linking urban land development to changes in marine biodiversity remain largely hypothetical. Does urbanization introduce new species to marine environments? Does it alter nutrient flows in ways that benefit some marine communities? And how do these patterns play out over longer time scales? Until these questions can be answered, we are working with an incomplete picture of how expanding cities reshape the edge of the sea.

## Citation

Samhouri, Jameal F.; Shelton, Andrew Olaf; Williams, Gregory D.; Feist, Blake E.; Hennessey, Shannon M.; Bartz, Krista; Kelly, Ryan P.; O’Donnell, James L.; Sheer, Mindi; Stier, Adrian C.; Levin, Phillip S. (2022). How much city is too much city? Biodiversity and ecosystem functioning along an urban gradient at the interface of land and sea. *Frontiers in Marine Science*.

[Read the full paper](https://doi.org/10.3389/fmars.2022.931319)

*This paper is Open Access.*`,
  },
  {
    slug: "north-sea-ecosystem-has-crossed-a-point-of-no-return-scienti",
    title: "North Sea Ecosystem Has Crossed a Point of No Return, Scientists Warn",
    date: "2022-01-15",
    author: "Sguotti et al.",
    excerpt: "Scientists analyzed 40 years of data from the North Sea ecosystem and discovered that fishing and warming have caused an irreversible regime shift, meaning the ecosystem has fundamentally changed and cannot return to its previous state even if pressures are reduced.",
    featuredImage: "/images/norht-sea-fishing.jpeg",
    tags: ["Publication","2022"],
    doiUrl: "https://doi.org/10.3389/fmars.2022.945204",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1lzmygs-zbu9cSlXlRYjk7B5I1dW4leDy&usp=drive_fs",
    content: `When my colleagues and I analyzed four decades of data from the North Sea, we discovered something unsettling: this heavily fished and rapidly warming ecosystem had crossed an invisible threshold and fundamentally reorganized itself in ways that appear irreversible. Working with Alexandra Blöcker, Christian Möllmann, and an international team of marine scientists, we found evidence of a previously undetected regime shift that challenges how we think about ocean recovery.

We wanted to answer a deceptively simple question: when marine ecosystems undergo dramatic changes, can they bounce back? The North Sea seemed like the perfect place to investigate this. As one of the most heavily human impacted marine areas in the world, it experiences both intensive fishing pressure and rapid warming. We assembled 40 years of data covering everything from plankton to commercially important fish species, then applied catastrophe theory and stochastic cusp modeling to detect regime shifts and test whether they showed hysteresis—the technical term for irreversibility.

What we found was stark. The North Sea ecosystem had experienced a regime shift driven by the combined effects of fishing and warming, and this shift appeared to be irreversible. Previous studies had documented ecosystem changes in the 1980s and 1990s, but they focused on subsets like plankton or fish populations and used methods that couldn't quantify hysteresis. Our comprehensive analysis revealed that the ecosystem as a whole had crossed a tipping point and settled into a new stable state.

The most troubling aspect of our findings was what we didn't find—any clear path back. While reducing fishing pressure might help increase yields of currently exploited species, simply removing fishing pressure is unlikely to reverse the regime shift because other feedbacks now maintain the new state. These feedbacks stabilize the new regime through the creation of new interactions among species, new energy pathways and new system structures. We were looking at an ecosystem that had fundamentally reorganized itself.

This matters because it changes how we think about marine conservation and management. If ecosystems can cross points of no return, then preventing regime shifts becomes more important than trying to reverse them. Since climate change is not currently reversible and can only be mitigated, the new regime in which the North Sea now resides appears permanent. This means major adaptations are needed to maximize the services that can be provided by this newly transformed ecosystem.

Our work raises as many questions as it answers. What are the specific feedback mechanisms that lock ecosystems into new states? How many other marine systems have already crossed similar thresholds without our knowing? Most importantly, how do we identify ecosystems approaching tipping points before it's too late? The North Sea's transformation may be irreversible, but perhaps its lessons can help us protect other ocean ecosystems while we still can.

## Citation

Sguotti, Camilla; Blöcker, Alexandra M.; Färber, Leonie; Blanz, Benjamin; Cormier, Roland; Diekmann, Rabea; Letschert, Jonas; Rambo, Henrike; Stollberg, Nicole; Stelzenmüller, Vanessa; Stier, Adrian C.; Möllmann, Christian (2022). Irreversibility of regime shifts in the North Sea. *Frontiers in Marine Science*.

[Read the full paper](https://doi.org/10.3389/fmars.2022.945204)

*This paper is Open Access.*`,
  },
  {
    slug: "when-to-watch-closer-new-study-shows-monitoring-becomes-more",
    title: "When to Watch Closer: New Study Shows Monitoring Becomes More Valuable as Populations Near Collapse",
    date: "2022-01-15",
    author: "Stier et al.",
    excerpt: "Researchers used computer simulations to show that more precise monitoring of harvested natural resources becomes increasingly valuable when populations approach critical collapse thresholds, and that adaptive monitoring strategies could help prevent irreversible population crashes.",
    featuredImage: "/images/rocky-beach-cove-panorama.jpeg",
    tags: ["Publication","2022"],
    doiUrl: "https://doi.org/10.1098/rspb.2022.0526",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1h8LwgdQKDdLfnKotlaIDcY5SU2rQ6E4A&usp=drive_fs",
    content: `A major challenge in sustainability science is identifying targets that maximize ecosystem benefits to humanity while minimizing the risk of crossing critical system thresholds. We tackled a deceptively simple question: how much monitoring is enough?

In natural resource management, high-precision monitoring costs serious money, requires analysis of large datasets, and can delay decision-making. But insufficient monitoring risks missing warning signs before populations crash past critical thresholds. We built a closed-loop management strategy evaluation, essentially a virtual laboratory where we could harvest populations over 50-year periods and observe outcomes under different monitoring scenarios.

We ran 10,000 replicate simulations, testing how monitoring precision affected both the risk of population collapse and the economic value managers could extract. We focused on populations with critical biological thresholds, points where population growth rates become negative, leading to what scientists call depensation.

Our results revealed a clear pattern: the value of monitoring information increases as populations spend more time near critical collapse thresholds. This benefit emerged because higher monitoring precision promoted both higher sustainable yield and greater capacity for populations to recover from overharvest. When populations were safely above their danger zones, basic monitoring worked adequately. But as they approached critical thresholds, precise monitoring became exponentially more valuable.

Our findings suggest that precautionary buffers triggering increased monitoring precision as resource levels decline may offer a way to minimize monitoring costs while maximizing profits. This research provides a framework for making tough decisions about monitoring investments, with implications extending beyond fisheries to any harvested resource, from wildlife to forests, where critical thresholds might exist.

However, significant challenges remain. Scientists still struggle to identify where critical thresholds actually exist in real populations, or to predict how environmental changes might shift their locations. Our computer simulations provided a clean proof of concept, but the harder work lies ahead in seeing whether these insights can prevent real-world collapses.

## Citation

Stier, Adrian C.; Essington, Timothy E.; Samhouri, Jameal F.; Siple, Margaret C.; Halpern, Benjamin S.; White, Crow; Lynham, John M.; Salomon, Anne K.; Levin, Phillip S. (2022). Avoiding critical thresholds through effective monitoring. *Proceedings of the Royal Society B: Biological Sciences*.

[Read the full paper](https://doi.org/10.1098/rspb.2022.0526)

*This paper is Open Access.*`,
  },
  {
    slug: "remote-coral-reefs-no-safer-from-climate-change-than-those-n",
    title: "Remote Coral Reefs No Safer From Climate Change Than Those Near Cities",
    date: "2022-01-15",
    author: "Baumann et al.",
    excerpt: "Scientists tested whether remote coral reefs are more resilient to climate change than those near human populations. Surprisingly, they found no relationship between isolation and resistance to disturbance, and some evidence that reefs near developed areas may actually recover faster.",
    featuredImage: "/images/tropical-island-split-view-coral-reef-shark.jpeg",
    tags: ["Publication","2022","Coral","Climate","Conservation"],
    doiUrl: "https://doi.org/10.1111/gcb.15904",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?authuser=astier%40ucsb.edu&id=1D46ynLQw4LAcMqAtk86PalpNZ70ytJLE&usp=drive_fs",
    content: `The idea seems intuitive: coral reefs far from human civilization should be better protected from our impacts and therefore more resilient to climate change. But when we tested this assumption, we found something surprising.

We analyzed the relationship between local human influence and coral community resilience across reefs worldwide. We measured both resistance to disturbance and recovery rates following bleaching, disease, storms, and predator outbreaks. Our results challenged a fundamental assumption in coral conservation.

Remote coral reefs showed no enhanced resilience compared to those near human populations. In fact, some evidence suggested reefs in more developed areas recovered from disturbances faster than their isolated counterparts. We found no relationship between human influence and resistance to disturbance.

These findings have profound implications for coral conservation strategy. Remote reefs have often been viewed as potential biodiversity arks, places where coral communities might survive as climate change devastates more accessible areas. This research suggests that assumption is flawed. Remote reefs are just as vulnerable to the global threat of climate change as reefs anywhere else.

The silver lining in these findings is that some reefs close to large human populations demonstrated relative resilience. This suggests that focusing research and conservation resources on more accessible locations may actually maximize conservation outcomes rather than investing heavily in protecting distant, isolated reefs.

Ultimately, the study delivers a sobering message: there is no hiding from climate change. Geographic isolation cannot protect coral reefs from warming oceans and acidification. Only drastic and rapid cuts in greenhouse gas emissions will ensure coral survival worldwide.

## Citation

Baumann, Justin H.; Zhao, Lily Z.; Stier, Adrian C.; Bruno, John F. (2022). Remoteness does not enhance coral reef resilience. *Global Change Biology*.

[Read the full paper](https://doi.org/10.1111/gcb.15904)

*This paper is Open Access.*`,
  },
  {
    slug: "mathematical-model-reveals-how-ocean-storms-reshape-entire-k",
    title: "Mathematical Model Reveals How Ocean Storms Reshape Entire Kelp Forest Communities",
    date: "2021-01-15",
    author: "Detmer et al.",
    excerpt: "Researchers developed a mathematical model to understand how storm intensity affects giant kelp forests and the underwater communities that depend on them, finding that severe storms lead to more understory algae and fewer sessile animals on the seafloor.",
    featuredImage: "/images/kelp-hero.jpeg",
    tags: ["Publication","2021","Models","Kelp"],
    doiUrl: "https://doi.org/10.1002/ecy.3304",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1AQU-MIiBqn99T_U8GGIBX3Nb8KBG6-Xk&usp=drive_fs",
    content: `We developed a mathematical model to understand how storm disturbance to giant kelp cascades through entire benthic communities in California kelp forests. Our study addresses a key challenge in disturbance ecology: understanding how temporally variable disturbance regimes affect foundation species and surrounding communities.

Giant kelp is unique among foundation species because it grows rapidly and shows extreme fluctuations in biomass. We built a mathematical model that simulates the kelp's three-stage life cycle and how this population responds to different storm scenarios. We then modeled how changes in kelp abundance affect competition between understory algae and sessile invertebrates for space on the seafloor.

Our simulations revealed a clear pattern: severe storm regimes resulted in greater abundance of understory macroalgae and lower abundance of sessile invertebrates compared to milder regimes. The mechanism involves light availability. Dense kelp canopies can reduce the amount of light reaching the benthic community by up to 90%. When storms remove the kelp canopy, increased light availability benefits understory algae that require sufficient light to grow, while sessile invertebrates lose their competitive advantage in low-light conditions.

Our model's predictions matched empirical data from 20 years of community observations from the Santa Barbara Coastal Long Term Ecological Research program. We found that both the cascading effects of kelp loss and direct storm scouring of the benthos influenced competition outcomes between community members.

These findings demonstrate how disturbance-driven fluctuations in foundation species abundance can have strong consequences for community structure. Our study points to the value of long-term data sets and mechanistic models for understanding the interacting effects of disturbance and foundation species in ecological communities.

## Citation

Detmer, A. Raine; Miller, Robert J.; Reed, Daniel C.; Bell, Tom W.; Stier, Adrian C.; Moeller, Holly V. (2021). Variation in disturbance to a foundation species structures the dynamics of a benthic reef community. *Ecology*.

[Read the full paper](https://doi.org/10.1002/ecy.3304)`,
  },
  {
    slug: "why-big-islands-feed-more-predators-new-theory-links-food-we",
    title: "Why Big Islands Feed More Predators: New Theory Links Food Webs to Biodiversity Hotspots",
    date: "2021-01-15",
    author: "Holt et al.",
    excerpt: "This paper develops theoretical models to understand how food web structure - the feeding relationships between species at different trophic levels - influences species-area relationships on islands and isolated habitats.",
    featuredImage: "/images/forested-islands-aerial-ocean-view.JPG",
    tags: ["Publication","2021","Conservation"],
    doiUrl: "https://doi.org/https://doi.org/10.1017/9781108569422.017",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1ZMBdWT7AmosWZ_fLywSaKhW4oFVcA5DP&usp=drive_fs",
    content: `When my colleagues Dominique Gravel, Adrian Stier, James Rosindell and I began building mathematical models of how predators and prey should be distributed across islands of different sizes, we discovered something that Charles Elton sketched over a century ago but never fully developed. Working from neutral theory - the controversial idea that species identities don't matter for community assembly - we found that the classic species-area relationship, where bigger areas support more species, should work differently for predators than for plants.

We wanted to answer a question that has puzzled ecologists since island biogeography began: does being higher up the food chain change how species respond to habitat size? Most studies treat all species the same way, but we suspected that wasn't right. We built computer models where individuals live, die, and reproduce according to simple rules, then stacked multiple trophic levels on top of each other. In some models, we created strict food chains where each predator ate only one type of prey. In others, we mixed specialists with generalists that could feed on multiple species.

Our models revealed a clear pattern: species at higher trophic levels consistently showed steeper species-area relationships than those below them. When we modeled food chains with specialized predator-prey relationships, this effect became even more pronounced - the species-area relationship became progressively steeper as you moved up each level of the food chain. The mathematics showed that predators, being less abundant and more dependent on their prey, are disproportionately affected by area loss.

What surprised us most was how robust this pattern remained across different model assumptions. Even when we relaxed the strict neutral assumptions and allowed species to interact in more realistic ways, the fundamental pattern held. However, our models also revealed huge gaps in our understanding. We still don't fully grasp how the mobility differences between trophic levels - the fact that predators often range farther than their prey - should influence these relationships.

This work matters because most conservation strategies focus on protecting individual species rather than entire food webs. Our models suggest that habitat fragmentation hits top predators hardest, not just because they're naturally rare, but because of fundamental mathematical relationships governing how trophic interactions scale with space. If we're serious about maintaining functional ecosystems, we need to think about area requirements differently for different parts of the food web.

The next step is testing these predictions with real data from island systems around the world. Do bird predators really show steeper species-area curves than their insect prey? How do marine food webs scale differently than terrestrial ones? We're still scratching the surface of understanding how space shapes the intricate feeding relationships that hold ecosystems together.

## Citation

Holt, Robert D.; Gravel, Dominique; Stier, Adrian; Rosindell, James (2021). On the Interface of Food Webs and Spatial Ecology: The Trophic Dimension of Species–Area Relationships. *The Species-Area Relationship: Theory and Application*.

[Read the full paper](https://doi.org/https://doi.org/10.1017/9781108569422.017)`,
  },
  {
    slug: "safety-in-numbers-doesn-t-work-for-baby-corals-under-attack",
    title: "Safety in Numbers Doesn't Work for Baby Corals Under Attack",
    date: "2021-01-15",
    author: "Kopecky et al.",
    excerpt: "Researchers studied how coral colony density and predation by fish affect the growth and survival of small staghorn corals, finding that predators devastate young corals regardless of how crowded they are together.",
    featuredImage: "/images/pufferfish.jpeg",
    tags: ["Publication","2021","Coral","Conservation"],
    doiUrl: "https://doi.org/10.1007/s00338-021-02076-z",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=15I51j8vgjIGNoo_GjOEUuH9eglDxOqgz&usp=drive_fs",
    content: `We conducted an experiment in the lagoons of Moorea to test a fundamental question about coral reef recovery: does safety come in numbers? Ecological theory suggested that when coral populations crash, they might fall into a 'predator pit'—a deadly trap where predators focus their attacks on the few remaining corals, preventing recovery. We wanted to know if clustering young corals together might dilute this predation pressure, giving them a better chance to survive and grow. So we created coral neighborhoods of different sizes: solitary corals, groups of four spaced 13 centimeters apart, and dense clusters of eight corals just 6 centimeters from their neighbors.

Our results were stark and unambiguous. Corallivorous fish caused high mortality rates in exposed corals after just 30 days, regardless of whether those corals were alone or crowded together. Meanwhile, corals protected behind mesh cages survived without damage. The pattern held over the long term—after one year, protected corals showed dramatic growth while exposed corals declined. There was no interaction between density and predation: fish attacked with equal intensity whether corals were isolated or clustered.

What surprised us was finding no evidence for predator dilution at the densities we tested, which reflected the natural range of staghorn coral spacing on Moorea's patch reefs. We had expected that dense coral clusters might overwhelm the fish, forcing them to spread their attacks across more targets. Instead, the predators seemed undeterred by coral abundance. Perhaps dilution effects only emerge in the massive staghorn thickets that can stretch for tens of meters—formations that are naturally defended by territorial damselfish that ward off both herbivores and corallivores.

These findings suggest that the conventional wisdom about safety in numbers doesn't apply to young staghorn corals, at least not at the scales we studied. For coral restoration efforts, this means that simply planting corals closer together won't protect them from predation. Our research highlights how vulnerable juvenile corals are during this critical establishment phase, when they're building the foundation for future thickets but haven't yet grown large enough to attract protective damselfish partners. Understanding this vulnerability is crucial for predicting how coral populations might recover after major bleaching events or other disturbances that reduce coral cover.

The broader implications for different coral species and reef systems remain to be explored. Does this density-independent predation pattern hold for other coral types, or is it unique to fast-growing staghorn species? And what happens in reef areas with different corallivore communities or varying predation pressure? Further experiments across multiple species and locations are needed to understand whether young corals anywhere can truly find safety in numbers, or if protection from predators—through restoration techniques, marine protected areas, or other management strategies—remains their best hope for survival.

## Citation

Kopecky, Kai L.; Cook, Dana T.; Schmitt, Russell J.; Stier, Adrian C. (2021). Effects of corallivory and coral colony density on coral growth and survival. *Coral Reefs*.

[Read the full paper](https://doi.org/10.1007/s00338-021-02076-z)

*This paper is Open Access.*`,
  },
  {
    slug: "california-s-ocean-reserves-deliver-fishing-bonanza-tripling",
    title: "California's Ocean Reserves Deliver Fishing Bonanza, Tripling Lobster Catch Despite Closing Fishing Grounds",
    date: "2021-01-15",
    author: "Lenihan et al.",
    excerpt: "This study examined whether Marine Protected Areas (MPAs) established in 2012 along California's coast actually benefit the local spiny lobster fishery through 'spillover' - lobsters moving from protected areas into fishing zones.",
    featuredImage: "/images/california-coastline-rocky-shore.jpg",
    tags: ["Publication","2021","Management","Conservation"],
    doiUrl: "https://doi.org/10.1038/s41598-021-82371-5",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1JGQfehS-RGz_IsffmgDAdaPC3xy22OrG&usp=drive_fs",
    content: `We studied whether Marine Protected Areas established in 2012 along California's mainland coast would benefit the local spiny lobster fishery. The California spiny lobster fishery was already considered relatively sustainable, raising questions about whether closing sections of coast to fishing would make a difference.

Our study tested whether MPAs would lead to increased lobster biomass and density inside protected areas, which in turn would lead to increased landings despite reduced fishable area. We combined underwater diver surveys of fixed plots inside and outside MPAs with analysis of commercial fishing data from four fishing blocks - one containing two MPAs and three without protection.

Lobster biomass increased significantly in both protected and fished areas over six years, but increases within MPAs were threefold higher for density compared to fished areas. More importantly for the fishing industry, total lobster catch in the fishing block containing MPAs increased by 225% despite losing 35% of its fishable area to the new reserves. Across the entire study region, annual catch increased by 57% while fishing effort increased by 73%.

Catch-per-unit-effort remained essentially unchanged in the block with MPAs even as total catches more than doubled, indicating that increased catches resulted from fishers more than doubling their effort rather than lobsters becoming easier to catch. This pattern suggests that as lobster populations built up inside protected areas, animals began spilling over into fishing zones where they could be harvested.

Our results provide rare quantitative evidence that Marine Protected Areas can deliver on promises to both conserve marine life and enhance fisheries. Only two previous studies have documented net gains to lobster fisheries from spillover, both in heavily exploited systems. Our findings suggest that even in relatively sustainable fisheries like California's, strategic placement of no-take zones can create benefits for both conservation and fishing communities.

We observed increased lobster abundance throughout the region, which may be related to factors we did not test. Questions remain about long-term sustainability of these gains and the specific mechanisms driving spillover patterns.

## Citation

Lenihan, Hunter S.; Gallagher, Jordan P.; Peters, Joseph R.; Stier, Adrian C.; Hofmeister, Jennifer K. K.; Reed, Daniel C. (2021). Evidence that spillover from Marine Protected Areas benefits the spiny lobster (Panulirus interruptus) fishery in southern California. *Scientific Reports*.

[Read the full paper](https://doi.org/10.1038/s41598-021-82371-5)

*This paper is Open Access.*`,
  },
  {
    slug: "why-scientists-can-t-solve-conservation-conflicts-the-rashom",
    title: "Why Scientists Can't Solve Conservation Conflicts: The Rashomon Effect Explained",
    date: "2021-01-15",
    author: "Levin et al.",
    excerpt: "This paper explores how differences in perception, not just differences in values, drive conflicts in conservation and resource management. Named after the Kurosawa film, the 'Rashomon effect' describes how different observers can have plausible but conflicting interpretations of the same events.",
    featuredImage: "/images/conflict-image.jpg",
    tags: ["Publication","2021","Conservation"],
    doiUrl: "https://doi.org/10.1093/biosci/biaa117",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1iOnkG-A1jkIuBSybyqtSBzEZgXho9GKG&usp=drive_fs",
    content: `When stakeholders fight over natural resources, we often assume the conflict stems from competing values or self-interest. But what if people looking at the same facts simply see different realities? Researchers led by Phillip Levin, working with Steven Gray, Christian Möllmann, and Adrian Stier, explored this phenomenon and named it after Akira Kurosawa's legendary 1950 film Rashomon.

In the film, four witnesses give contradictory accounts of a crime in a forest. Each account is internally coherent and plausible, yet they cannot all be true. The researchers argue that conservation conflicts often follow the same pattern. Different stakeholders observe the same ecosystem, have access to the same data, yet arrive at fundamentally different conclusions about what is happening and what should be done.

The paper identifies three conditions that create a conservation Rashomon effect: differences in perspective based on social and cultural background, multiple plausible interpretations of the available evidence, and insufficient data to definitively elevate one interpretation above others. When all three conditions are present, conflict becomes almost inevitable.

Policymakers often turn to scientists as neutral honest brokers who can cut through disagreements by providing objective facts. But the researchers challenge this assumption. Scientists themselves bring perspectives shaped by their training, institutional incentives, and personal experiences. Two equally qualified scientists studying the same system can reach different conclusions, both supported by legitimate evidence.

Rather than seeking an impossible objectivity, the authors suggest embracing epistemic pluralism, acknowledging that multiple valid ways of knowing exist. Effective resource management may require not finding the one right answer, but creating inclusive processes that acknowledge uncertainty and incorporate diverse perspectives.

This framework has practical implications for anyone involved in environmental disputes. Instead of assuming opponents are ignorant or acting in bad faith, we might recognize that they genuinely perceive the situation differently. Building understanding across these perceptual divides may be more productive than endless battles over whose facts are correct.

## Citation

Levin, Phillip S; Gray, Steven A; Möllmann, Christian; Stier, Adrian C (2021). Perception and Conflict in Conservation: The Rashomon Effect. *BioScience*.

[Read the full paper](https://doi.org/10.1093/biosci/biaa117)`,
  },
  {
    slug: "native-fish-vastly-outnumber-invasive-lionfish-in-caribbean-",
    title: "Native Fish Vastly Outnumber Invasive Lionfish in Caribbean Panama Waters",
    date: "2021-01-15",
    author: "Samhouri et al.",
    excerpt: "Scientists studying lionfish invasion in Caribbean Panama found that native fish predators are actually more abundant than the invasive lionfish, and that lionfish don't have worse impacts on prey fish than native predators do.",
    featuredImage: "/images/lionfish-soft-coral.jpeg",
    tags: ["Publication","2021","Predator-Prey","Coral","Management"],
    doiUrl: "https://doi.org/10.1007/s00338-021-02132-8",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1DOXpn6YWBxrGjDXRZr1x7M9uOv79TgXP&usp=drive_fs",
    content: `When we descended onto the patch reefs of Caribbean Panama in January 2015, we expected to find lionfish dominating these coral communities. Instead, we discovered something remarkable: native predators outnumbered the infamous invaders by staggering margins. On our surveys, native mesopredators like graysby and hamlets were 30 to 40 times more abundant than lionfish during timed counts.

We wanted to answer a critical question that had been nagging at marine biologists: Are lionfish really as devastating as we think, or does their impact depend heavily on local context? To find out, we conducted two types of underwater surveys around Bocas del Toro, counting fish on 24 individual patch reefs and swimming timed surveys across three sites. Then we brought the question into the lab, setting up aquarium experiments to directly compare how lionfish and native graysby affected the survival of masked gobies – small fish we'd observed being eaten voraciously by both predators in the wild.

The numbers told a clear story. Native mesopredators were much more common on patch reefs than lionfish, and their densities were higher when they were present. In our laboratory experiments, both lionfish and graysby killed similar numbers of gobies – there was no significant difference between the invasive and native predators. When we analyzed citizen science data from across eight Caribbean regions, we found that graysby were more abundant than lionfish.

What surprised us most was how consistently lionfish were outnumbered across different scales – from individual reefs to entire regions. We had expected the invasion to be further along. Our laboratory results were equally unexpected: if lionfish were such uniquely devastating predators, shouldn't they have outperformed native species? Instead, their impacts were indistinguishable from those of graysby. The reasons for lower lionfish densities in this region require further investigation.

These findings matter because they challenge the narrative of lionfish as unstoppable ecological destroyers. If native predators are more abundant and equally impactful, then lionfish management might need to consider the bigger picture of reef predator communities. Our results support calls for management strategies that account for local ecological and social dynamics rather than applying blanket approaches across all invaded regions.

But this is just one snapshot from one region. We need to understand why lionfish densities vary so dramatically across the Caribbean and need longer-term studies to see if these patterns hold over time. The lionfish invasion is far from over, but our work suggests that in some places, the reefs might be pushing back more successfully than previously realized.

## Citation

Samhouri, Jameal F.; Stier, Adrian C. (2021). Ecological impacts of an invasive mesopredator do not differ from those of a native mesopredator: lionfish in Caribbean Panama. *Coral Reefs*.

[Read the full paper](https://doi.org/10.1007/s00338-021-02132-8)

*This paper is Open Access.*`,
  },
  {
    slug: "same-fish-different-appetites-parrotfish-behavior-varies-dra",
    title: "Same Fish, Different Appetites: Parrotfish Behavior Varies Dramatically Across Caribbean Reefs",
    date: "2021-01-15",
    author: "Wilson et al.",
    excerpt: "Researchers studied how parrotfish grazing behavior varies across different Caribbean reef sites, finding that the same fish species feed at dramatically different rates depending on where they live, which could affect how well reefs recover from damage.",
    featuredImage: "/images/parrotfish.jpeg",
    tags: ["Publication","2021","Coral","Conservation","Management"],
    doiUrl: "https://doi.org/10.1007/s00227-021-03844-9",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1A9mev7M8cI1PhYV-daLPqISci8eVQY-b&usp=drive_fs",
    content: `We discovered that parrotfish—critical reef cleaners—behave dramatically differently depending on where they live, a finding that could change how we protect coral reefs.

We wanted to know whether herbivorous fish grazing behavior stays constant across different reef environments, or whether local conditions change how these species feed. To find out, we followed individual parrotfish for 2-minute periods across 13 reef sites spanning Bonaire, Antigua, and Barbuda. We focused on two species—Sparisoma viride and Scarus vetula—recording how often they bit, how long they spent feeding, and how intensively they grazed. We also measured reef characteristics like coral cover, fish populations, and structural complexity.

Our analyses showed significant differences in feeding rates, time spent grazing, and grazing intensity across different sites. These behavioral differences could alter the ecological impact of a parrotfish population even when the number and size of fish remained the same. We documented these patterns across reefs that varied dramatically in condition, from Bonaire's pristine waters with among the highest live coral cover and herbivorous fish biomass in the Caribbean region to the more degraded reefs of Antigua and Barbuda with their reduced fish stocks and high algal abundances.

What drives these behavioral differences remains unclear. We suggest several hypothesized mechanisms for these behavioral variations that would benefit from explicit testing in future research—perhaps predator presence, reef structural complexity, or the abundance and nutritional content of algal resources.

These findings challenge a core assumption in reef management. Many current approaches set herbivore biomass targets assuming that grazing behavior remains constant across reef systems. But if herbivore feeding activity is suppressed under degraded reef conditions, the biomass of herbivorous fish capable of maintaining reef function in pristine systems may be insufficient in degraded environments. This could create a reinforcing feedback loop where insufficient herbivory further accelerates reef degradation.

We call for further investigation of the drivers and ecological implications of these behavioral inconsistencies. Understanding what environmental factors drive these behavioral variations and how they translate into ecosystem impacts will be critical for developing management strategies that work across different reef conditions.

## Citation

Wilson, Margaret W.; Gaines, Steven D.; Stier, Adrian C.; Halpern, Benjamin S. (2021). Variation in herbivore grazing behavior across Caribbean reef sites. *Marine Biology*.

[Read the full paper](https://doi.org/10.1007/s00227-021-03844-9)

*This paper is Open Access.*`,
  },
  {
    slug: "scientists-propose-teal-deal-to-combine-land-and-sea-climate",
    title: "Scientists Propose 'Teal Deal' to Combine Land and Sea Climate Solutions",
    date: "2020-01-15",
    author: "Dundas et al.",
    excerpt: "This paper argues that climate policies like the Green New Deal should integrate ocean-based solutions with terrestrial approaches, creating what the authors call a 'Teal Deal' that combines land and sea strategies for renewable energy, transportation, food security, and habitat restoration.",
    featuredImage: "/images/offshore-wind-farm.jpeg",
    tags: ["Publication","2020","Climate","Conservation"],
    doiUrl: "https://doi.org/10.1111/conl.12716",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1HOprjkpdM2JMnZ9k_YpqJYdk7bGYNl_v&usp=drive_fs",
    content: `Climate policy discussions around Green New Deal proposals have focused primarily on terrestrial solutions while largely ignoring ocean-based strategies. We identified this as a significant missed opportunity given that oceans cover 71% of the planet's surface.

We analyzed four key sectors where ocean and terrestrial climate solutions could be integrated: renewable energy, transportation, food security, and habitat restoration. We propose what we call a 'Teal Deal'—combining green terrestrial and blue ocean strategies into a more comprehensive approach.

Our analysis revealed significant potential for offshore renewable energy. Offshore winds blow harder and more consistently than on land, with potential to harness more than 100 GW of untapped offshore wind resources in U.S. Federal waters. The timing is particularly compelling: wind strength peaks in the afternoon and evening, precisely when solar energy production declines but electricity demand reaches its highest point. In California, this creates complementarity where offshore wind could fill gaps when solar production drops.

The economic potential is demonstrated by European offshore wind farms, which generated 18.5 GW of clean power in 2018 and supported as many as 130,000 full-time equivalent jobs per year. Deep-water floating wind turbines are capable of powering over 15,000 homes each, representing significant technological advancement.

However, we found that offshore energy development in the U.S. currently intersects nine different domestic policies, creating bureaucratic obstacles that discourage investment and development. This regulatory complexity represents a significant barrier despite ready technology and favorable economics.

We argue that portfolio theory supports diversifying climate solution sets to reduce risk and increase returns on investment. With both expected and unanticipated consequences of climate change, integrated terrestrial-ocean policies could be more nimble and adaptive than single-sector approaches. A Teal Deal approach could achieve climate regulation goals while building resilience, generating economic co-benefits, and supporting ecosystem services that neither purely terrestrial nor purely marine approaches could deliver alone.

## Citation

Dundas, Steven J.; Levine, Arielle S.; Lewison, Rebecca L.; Doerr, Angee N.; White, Crow; Galloway, Aaron W. E.; Garza, Corey; Hazen, Elliott L.; Padilla‐Gamiño, Jacqueline; Samhouri, Jameal F.; Spalding, Ana; Stier, Adrian; White, J. Wilson (2020). Integrating oceans into climate policy: Any green new deal needs a splash of blue. *Conservation Letters*.

[Read the full paper](https://doi.org/10.1111/conl.12716)

*This paper is Open Access.*`,
  },
  {
    slug: "giant-kelp-acts-as-ecosystem-stabilizer-through-biodiversity",
    title: "Giant Kelp Acts as Ecosystem Stabilizer Through Biodiversity in 18-Year California Study",
    date: "2020-01-15",
    author: "Lamy et al.",
    excerpt: "Scientists studied 18 years of data from California kelp forests to understand how the stability of giant kelp affects the stability of the diverse community living beneath it. They found that when giant kelp populations are stable, the understory communities are also more stable, primarily because stable kelp supports higher species diversity.",
    featuredImage: "/images/giant-kelp-sunlight-underwater.jpeg",
    tags: ["Publication","2020","Kelp"],
    doiUrl: "https://doi.org/10.1002/ecy.2987",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=19RVogu8m9SGTr4DzsUjx72WPab0p-gQN&usp=drive_fs",
    content: `We analyzed 18 years of data from 32 plots across nine rocky reefs in the Santa Barbara Channel to discover how giant kelp functions as an ecosystem stabilizer. We sought to answer whether the stability of giant kelp enhances the stability of the diverse community living beneath its canopy.

Every summer from 2001 to 2018, divers recorded the abundances and sizes of 114 different species—53 types of understory algae, 61 sessile invertebrates, and one seagrass species—living on the seafloor beneath the kelp canopy. We converted these measurements to biomass and calculated stability as the inverse of variability over time.

Our results revealed that the stability of understory communities was positively and indirectly related to giant kelp stability, primarily through kelp's direct positive association with species richness. More stable kelp supported more species, and more species resulted in more stable communities overall. Community stability was positively related to species richness through two mechanisms: increased stability of individual species and increased asynchrony between species.

A key finding was that the stabilizing effects of richness were three to four times stronger when algae and invertebrates were considered separately rather than together. This suggests that competition for shared resources, rather than different responses to environmental conditions, was the primary force stabilizing these communities.

This research has important implications because foundation species like giant kelp face increasing threats worldwide from climate change, pollution, and other human impacts. Our study demonstrates that kelp loss affects not just the kelp itself, but the stability of entire underwater ecosystems. The kelp acts as a biodiversity engine, and that biodiversity creates resilience against environmental fluctuations. Our study is among the first to quantify how the temporal stability of a foundation species directly influences the stability of the complex communities it supports.

## Citation

Lamy, Thomas; Koenigs, Craig; Holbrook, Sally J.; Miller, Robert J.; Stier, Adrian C.; Reed, Daniel C. (2020). Foundation species promote community stability by increasing diversity in a giant kelp forest. *Ecology*.

[Read the full paper](https://doi.org/10.1002/ecy.2987)`,
  },
  {
    slug: "hidden-fish-population-collapses-slip-past-regional-manageme",
    title: "Hidden Fish Population Collapses Slip Past Regional Management, Harming Local Communities",
    date: "2020-01-15",
    author: "Okamoto et al.",
    excerpt: "Researchers found that fishing practices can hide local population collapses by creating spatial mismatches between what managers see at large scales versus what's actually happening in small areas, using Pacific herring as a case study.",
    featuredImage: "/images/pacific-herring-net.jpeg",
    tags: ["Publication","2020","Management","Conservation"],
    doiUrl: "https://doi.org/10.1002/eap.2051",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=15E1ewttqQ9n5iUcekIEA7UOOIX1hT4gp&usp=drive_fs",
    content: `We studied Pacific herring populations across British Columbia's coastline and discovered something more insidious than the usual story of fishing pressure and population decline: entire local populations were collapsing while regional assessments suggested everything was fine.

We wanted to understand why so many exploited species have suffered unanticipated declines despite harvests that appeared sustainable. The problem seemed to lie in spatial mismatches - where the scale of management doesn't match the scale of the actual biological and social processes. We developed three different modeling approaches: theoretical equations to show when and how this happens, analysis of real herring data from British Columbia, and numerical simulations to test potential solutions.

Our models revealed that harvesting metapopulations actually magnifies spatial variability, creating discrepancies between regional and local trends while increasing risk of local population collapses. The mathematics showed something counterintuitive: spatial complexity can promote stability at large scales, but ignoring this complexity produces cryptic and negative consequences for people and animals that interact with resources at small scales. When we analyzed the herring data, we found exactly this pattern playing out in real populations.

The impacts were asymmetric. Mobile commercial fishing fleets can move between areas when local populations decline, but Indigenous fishers are constrained to local areas where they harvest herring eggs as an important food, trade, and cultural resource. Marine predators face similar constraints.

The implications extend far beyond herring. These spatially isolated collapses can have far-reaching consequences when species play indispensable roles in local social-ecological systems, including human communities with limited capacity to forage over wide geographic scales. Our numerical management strategy evaluation showed that dynamically optimizing harvest can minimize local risk without sacrificing yield, suggesting that solutions exist.

Our research highlights the need to implement multiple nested scales of management in practice - a challenge that's as much about politics and institutions as it is about marine biology.

## Citation

Okamoto, Daniel K.; Hessing‐Lewis, Margot; Samhouri, Jameal F.; Shelton, Andrew O.; Stier, Adrian; Levin, Philip S.; Salomon, Anne K. (2020). Spatial variation in exploited metapopulations obscures risk of collapse. *Ecological Applications*.

[Read the full paper](https://doi.org/10.1002/eap.2051)

*This paper is Open Access.*`,
  },
  {
    slug: "decades-of-fishing-and-climate-change-eroded-nature-s-insura",
    title: "Decades of Fishing and Climate Change Eroded Nature's Insurance Policy for Pacific Herring",
    date: "2020-01-15",
    author: "Stier et al.",
    excerpt: "Scientists studied Pacific herring populations around Haida Gwaii, British Columbia over 65 years to understand how fishing, climate, and population changes affected the stability of interconnected herring groups that historically provided reliable resources to predators and fishermen.",
    featuredImage: "/images/fish-eggs-roe-hand-closeup.JPG",
    tags: ["Publication","2020","Management","Climate"],
    doiUrl: "https://doi.org/10.1002/ecs2.3283",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1yeMMwIsfA8TP9KnUPsA4j41mT9YJCu0q&usp=drive_fs",
    content: `When I first looked at 65 years of herring data from the remote archipelago of Haida Gwaii, I saw something troubling: a natural insurance system was falling apart. My colleagues Andrew Shelton, Jameal Samhouri, Blake Feist, Phillip Levin and I had assembled records from 1950 to 2015 showing how Pacific herring populations across 11 locations around these British Columbia islands had fundamentally changed. What once was a portfolio of populations that boomed and busted at different times—providing reliable resources to predators and fishermen even when individual groups crashed—had become dangerously synchronized.

We wanted to understand what was driving this transformation. Were commercial fisheries to blame? Climate shifts? Or something else entirely? To find out, we built a Bayesian state-space model that could tease apart the relative effects of fishing pressure, environmental changes, and population growth on both local herring groups and the archipelago as a whole. We used spawn surveys and catch records from traditional spawn-on-kelp fisheries and other fisheries.

The results painted a clear picture of decline. We documented a severe decline in herring population growth over the 65-year period, along with the erosion of the herring portfolio itself. Commercial harvest had historically played a key role in herring dynamics, with typical annual exploitation rates hovering around 15% across the archipelago. But when we looked closer, local harvest rates told a different story—they reached as high as 65% when fishing occurred in specific areas. The Pacific Decadal Oscillation and population growth had equally strong effects on both local and regional population dynamics, showing that climate and internal population processes were just as important as human activities.

What surprised me most was how the portfolio effect—nature's way of spreading risk across space—had eroded so dramatically. We expected to find some changes, but the extent of synchronization was striking. The complexity of these interactions remains one of the biggest challenges in marine population biology.

This matters because herring are a cultural keystone species for indigenous peoples and a central node in Northeast Pacific food webs that support top predators. When populations become synchronized, they lose their ability to buffer against regional collapse—if one crashes, they all crash together. Our results suggest that developing herring management strategies at a finer spatial scale may help recover previous levels of spatial population asynchrony and ensure greater regional resource reliability, though this would require higher implementation and monitoring costs.

The big question now is whether we can reverse this process. Can management interventions restore the natural asynchrony that once made these herring populations so resilient? The herring of Haida Gwaii may hold lessons for managing spatially structured populations worldwide, but first we need to understand whether portfolio erosion is reversible or represents a permanent shift in how these coastal ecosystems function.

## Citation

Stier, Adrian C.; Olaf Shelton, Andrew; Samhouri, Jameal F.; Feist, Blake E.; Levin, Phillip S. (2020). Fishing, environment, and the erosion of a population portfolio. *Ecosphere*.

[Read the full paper](https://doi.org/10.1002/ecs2.3283)

*This paper is Open Access.*`,
  },
  {
    slug: "scientists-map-hidden-ways-humans-are-reshaping-ecosystems-t",
    title: "Scientists Map Hidden Ways Humans Are Reshaping Ecosystems Through Animal Behavior",
    date: "2020-01-15",
    author: "Wilson et al.",
    excerpt: "Scientists created a comprehensive framework showing how human activities change animal behavior, which can cascade through ecosystems to affect fundamental processes like nutrient cycling and pathogen transfer, though most of these ecological consequences remain largely unstudied.",
    featuredImage: "/images/coyote-road.jpeg",
    tags: ["Publication","2020","Conservation"],
    doiUrl: "https://doi.org/10.1111/ele.13571",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1b4UqrHI4Q-SlQCaghSEJs7A0ZHmV5YY5&usp=drive_fs",
    content: `When we began mapping how human activities ripple through ecosystems, I realized we were missing a crucial piece of the puzzle. Sure, we knew that hiking disturbs wildlife and noise pollution changes bird songs, but what happens next? My colleagues April Ridlon, Kaitlyn Gaynor, Steven Gaines, Adrian Stier, Benjamin Halpern and I suspected that these behavioral changes might cascade into fundamental shifts in how ecosystems function—but almost nobody had actually traced these connections.

We wanted to answer a deceptively simple question: when humans change animal behavior, do those changes actually matter for ecosystems? To find out, we synthesized literature across terrestrial and aquatic systems, looking for patterns in how human activities alter animal behavior and then tracking those changes through to their potential ecological consequences. Rather than studying one species or one type of disturbance, we cast the widest possible net to create a comprehensive framework.

What we found was both fascinating and troubling. Human activities affect animal behavior through four distinct mechanisms. We change population densities through hunting and culling. We create top-down effects by acting as 'super predators'—triggering fear responses that can differ from and exceed those caused by natural predators. We alter resource availability through intentional feeding or habitat destruction. And we modify physical environments through noise, light, chemical pollution, and habitat structure changes. These behavioral shifts can affect critical ecosystem functions including nutrient cycling, primary productivity, pathogen transfer and habitat provision.

But here's what surprised me most: we found very few studies that actually documented the complete pathway from human impact through behavioral change to ecosystem consequences. The literature is full of papers showing that construction noise makes birds sing differently, or that boat traffic changes whale movement patterns, but almost nobody follows up to see if these behavioral changes translate into measurable ecological effects. We discovered numerous factors that can dampen or prevent these cascading effects from occurring at all.

This knowledge gap has serious implications for conservation management. Without understanding these pathways, we risk wasting valuable resources on mitigating behavioral effects that ultimately have little ecological relevance. Conversely, we might be overlooking important drivers of ecosystem change that aren't addressed through traditional management strategies focused on habitat protection or species numbers rather than behavior.

The framework we've created can help prioritize which human-induced behavioral changes deserve immediate attention and which might be ecological dead ends. But we need a fundamental shift in how we study human impacts on wildlife. Instead of stopping at documenting behavioral changes, we need more studies that follow the thread all the way through to ecosystem consequences. Until we do, we're essentially flying blind in our efforts to manage human impacts on the natural world.

## Citation

Wilson, Margaret W.; Ridlon, April D.; Gaynor, Kaitlyn M.; Gaines, Steven D.; Stier, Adrian C.; Halpern, Benjamin S. (2020). Ecological impacts of human‐induced animal behaviour change. *Ecology Letters*.

[Read the full paper](https://doi.org/10.1111/ele.13571)`,
  },
  {
    slug: "grazing-halos-visible-from-space-reveal-hidden-drama-of-reef",
    title: "Grazing Halos Visible From Space Reveal Hidden Drama of Reef Fish Survival",
    date: "2019-01-15",
    author: "DiFiore et al.",
    excerpt: "Researchers discovered that the distinctive bare sand rings visible around coral patches from satellite imagery - called grazing halos - are created by herbivorous fish that venture out to graze on seagrass but stay close to the reef to avoid predators.",
    featuredImage: "/images/halo-grazing.png",
    tags: ["Publication","2019","Predator-Prey","Coral"],
    doiUrl: "https://doi.org/10.3354/meps13074",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1r_4hN4yHw_met53B5hUwfYRB9SeVrV8U&usp=drive_fs",
    content: `Look at satellite images of tropical coastlines and you'll notice something curious: rings of bare sand surrounding coral reef patches, like protective moats. These grazing halos, sometimes stretching tens of meters from reef edges, have puzzled scientists for years. Our research reveals the ecological drama creating these patterns.

The halos form through a simple but elegant mechanism: herbivorous fish living on coral reefs need to eat seagrass and algae growing on the surrounding seafloor, but they also need to avoid becoming meals themselves. This creates a landscape of fear. Fish venture out to graze but stay close enough to dart back to shelter when predators appear.

We combined satellite imagery with underwater surveys to understand what factors determine halo size. We found that predation risk, herbivore density, and reef patch size all influence how far fish will venture from safety. Counterintuitively, halos were often larger around reefs with more predators. We suggest this occurs because in predator-rich areas, herbivores must graze more intensively in the safe zone close to the reef, completely clearing vegetation there.

These findings transform grazing halos from curiosities into potential monitoring tools. Because the halos are visible from satellites, they could allow scientists to assess reef ecosystem health across enormous areas. A reef with a healthy halo likely has functioning predator-prey dynamics and active herbivore populations. Changes in halo patterns over time might signal shifts in ecosystem function.

Our study also demonstrates how fear itself shapes ecosystems. Predators don't just kill prey directly; they create landscapes of risk that alter where and how prey species feed. These non-consumptive effects of predators can be as ecologically important as actual predation, sculpting patterns visible from space.

## Citation

DiFiore, Bp; Queenborough, Sa; Madin, Emp; Paul, Vj; Decker, Mb; Stier, Ac (2019). Grazing halos on coral reefs: predation risk, herbivore density, and habitat size influence grazing patterns that are visible from space. *Marine Ecology Progress Series*.

[Read the full paper](https://doi.org/10.3354/meps13074)`,
  },
  {
    slug: "ocean-conservation-is-chasing-moving-targets-as-climate-chan",
    title: "Ocean Conservation Is Chasing Moving Targets as Climate Change Rewrites Recovery Rules",
    date: "2019-01-15",
    author: "Ingeman et al.",
    excerpt: "Scientists argue that ocean recovery efforts are failing because they treat recovery goals as fixed targets, when in reality marine ecosystems and human societies are constantly changing due to climate change and other factors.",
    featuredImage: "/images/whale-ship.jpeg",
    tags: ["Publication","2019","Climate","Conservation"],
    doiUrl: "https://doi.org/10.1126/science.aav1004",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1ReBpBG-2nx6mEnmrADRKh3h7uJK3Xy46&usp=drive_fs",
    content: `We started with what seemed like a success story. North Atlantic right whales had been recovering steadily since the end of whaling, helped by abundant copepod prey and vessel speed restrictions that kept ships away from sensitive habitats. Then, in 2017, something changed. Rapid warming reduced the availability of copepods, causing reproductive failure, and the whales followed their remaining prey into areas where effective vessel avoidance measures weren't in place. Suddenly, mortality from collisions and entanglement skyrocketed. We realized we were witnessing something larger—a fundamental problem with how we think about ocean recovery.

We wanted to understand why so many marine recovery efforts remain unsuccessful even after decades of active intervention, despite growing scientific awareness and strong regulations. We synthesized research across marine recovery efforts, analyzing how environmental shifts create moving targets for conservation. Rather than conducting new field work, we examined existing case studies and developed a theoretical framework for understanding recovery in dynamic systems.

What we found challenged the core assumptions of marine conservation. Recovery efforts often fail because they treat ecosystems and recovery goals as static, when marine social-ecological systems are inherently dynamic and increasingly so in an era of rapid climate change. We identified that successful recoveries can encompass a range of outcomes in the space between minimum ecological viability and maximum carrying capacity, rather than pursuing a single fixed target. The North Atlantic right whale case perfectly illustrated this—reduced productivity and increased mortality meant recovery timelines needed recalibrating compared to original projections.

What surprised us most was how rigid thinking about recovery had become. We discovered that different stakeholders might prefer to maximize growth rate for maximum yield, while others might prefer to maximize abundance, creating trade-offs between potential recovery targets that are rarely acknowledged. Our paper doesn't explain exactly how these trade-offs should be resolved—that's still an open question. We also note we can't predict precisely how interactions among multiple components of environmental change will affect tomorrow's ocean.

This matters because billions of people depend upon the ocean for food, livelihoods, energy production, and trade, yet humans living on tomorrow's Earth will demand even more from the ocean. Our framework suggests that recovery efforts must embrace institutional and tactical flexibility to keep pace with a changing ocean. Policy-makers need to adopt nimble approaches that enable rapid response to changing conditions and allow fluid coordination among institutions. Without this flexibility, conservation efforts will forever chase moving targets.

Looking ahead, we still don't know how to operationalize an inclusive definition of recovery organized around social-ecological resilience—it will prove more challenging than simply recrafting recovery policies with new metrics. There's a need to design policies that align incentives for disparate human actors toward coherent recovery goals. Emerging technologies like rope-less fishing gear and real-time data sharing offer hope, but fundamental questions remain about how to predict and manage recovery in an uncertain future. The mechanism for building truly adaptive recovery systems remains unclear, and that's what we need to figure out next.

## Citation

Ingeman, Kurt E.; Samhouri, Jameal F.; Stier, Adrian C. (2019). Ocean recoveries for tomorrow’s Earth: Hitting a moving target. *Science*.

[Read the full paper](https://doi.org/10.1126/science.aav1004)

*This paper is Open Access.*`,
  },
  {
    slug: "fish-metabolism-follows-different-rules-than-scientists-thou",
    title: "Fish Metabolism Follows Different Rules Than Scientists Thought",
    date: "2019-01-15",
    author: "Jerde et al.",
    excerpt: "Researchers analyzed metabolic rate data from 25 fish studies to determine how fish metabolism scales with body size, finding strong evidence for a scaling coefficient of 0.89 rather than the commonly assumed values of 0.67, 0.75, or 1.0.",
    featuredImage: "/images/flatfish-flounder-camouflage-sand.JPG",
    tags: ["Publication","2019","Climate"],
    doiUrl: "https://doi.org/10.3389/fphys.2019.01166",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=14AFSyczhrNE0uytf2ql358gNBLzK-oJH&usp=drive_fs",
    content: `When we began curating metabolic rate data from fish studies, we found evidence for a scaling coefficient of 0.89, not the 0.67, 0.75, or 1.0 that decades of theory had predicted. This number might seem abstract, but it represents a fundamental relationship governing how fish use energy as they grow.

We were trying to resolve one of ecology's longest-standing controversies: how does metabolic rate scale with body mass in fish? This question matters because the answer underpins predictions about population dynamics and climate change impacts. We curated data from 25 studies spanning 55 independent trials across 16 fish species, from common minnows to European eels. Each dataset required measurements of standard metabolic rate, temperature, and body mass—not trivial experiments, as measuring an individual fish's metabolic rate across a 10-fold range of body sizes is technically demanding.

Our analysis revealed strong evidence for a metabolic scaling coefficient of 0.89, with a ΔSIC interval spanning 0.82 to 0.99. This finding directly contradicts the mechanistically derived coefficients that have dominated ecological theory. The 0.67 value, based on surface area constraints, and the 0.75 value from fractal transport networks, and the 1.0 value from proportional scaling—none were supported by the data. We also found that metabolic rates vary 2-3 fold across individuals of the same population, and this variation is repeatable.

What emerged was how consistent this 0.89 pattern appeared across such diverse fish species and conditions, yet our models clearly showed that other factors matter too. The best-fitting models included random intercepts and random slopes by species, suggesting that taxonomy, ecology, or lifestyle characteristics influence the underlying metabolic processes. The mechanisms that drive this 0.89 relationship or why it differs from theoretical predictions remain unclear.

This matters because metabolic scaling relationships form the cornerstone of metabolic theory of ecology, linking individual physiology to community patterns and energy flows across landscapes. Our findings suggest that current models predicting how fish populations will respond to climate change may need revision. If fish metabolism scales differently than previously thought, projections of population abundance and species distributions under changing conditions could be systematically biased.

Many questions remain unanswered. What biological mechanisms produce this 0.89 scaling? How do ecological factors like habitat depth, activity level, or feeding strategy modify this relationship? More studies designed specifically to capture wide ranges of body sizes within species are needed, as is understanding whether this pattern holds for other vertebrate groups. The evidentialist framework we applied here allows for continuous refinement as new data emerge.

## Citation

Jerde, Christopher L.; Kraskura, Krista; Eliason, Erika J.; Csik, Samantha R.; Stier, Adrian C.; Taper, Mark L. (2019). Strong Evidence for an Intraspecific Metabolic Scaling Coefficient Near 0.89 in Fish. *Frontiers in Physiology*.

[Read the full paper](https://doi.org/10.3389/fphys.2019.01166)

*This paper is Open Access.*`,
  },
  {
    slug: "century-old-ocean-research-sites-could-hold-key-to-global-ma",
    title: "Century-Old Ocean Research Sites Could Hold Key to Global Marine Monitoring",
    date: "2019-01-15",
    author: "Muelbert et al.",
    excerpt: "This paper examines how the International Long-Term Ecological Research Network (ILTER), with more than 100 coastal and marine research sites worldwide, could serve as a platform for integrated global ocean observation by combining biological, physical, and chemical monitoring.",
    featuredImage: "/images/ocean-wave-kelp-breaking.jpeg",
    tags: ["Publication","2019","Climate"],
    doiUrl: "https://doi.org/10.3389/fmars.2019.00527",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=106GtE_QWH5fCIeJ22qP7-yVDPl3A8vrH&usp=drive_fs",
    content: `When my colleagues and I began mapping the global reach of marine research stations, we discovered something remarkable: scattered across the world's coastlines and seas are more than 100 research sites, some with observation records stretching back to the early 1900s. Working with Nicholas Nidzieko, Adriana Zingone, and dozens of other researchers from around the world, we realized these sites represented an untapped opportunity for understanding our changing oceans.

We wanted to answer a pressing question: how could the coastal and marine components of the International Long-Term Ecological Research Network serve as a platform for integrated global ocean observation? The challenge was daunting - marine ecosystems face unprecedented threats from human activities, yet most ocean monitoring focuses on physical and chemical variables while biological observations lag behind. We conducted a comprehensive SWOT analysis, examining the strengths, weaknesses, opportunities, and threats facing this global network of 44 countries and more than 700 research sites.

What we found was both encouraging and sobering. The network includes coastal and marine sites distributed globally, creating what could be considered a global observing system. Some of the coastal and marine sites have data records that predate ILTER's formal establishment in 1993, with observations dating back to the early 1900s.

What surprised us most was the disconnect between the network's potential and its current coordination. While individual sites collect broad varieties of abiotic and biotic variables that could feed into global initiatives, harmonizing these measurements remains a challenge. The ILTER community has developed tools to compare methods and allow data integration, but putting open data principles into practice is still challenging at most member networks and individual sites. We found that many sites operate in relative isolation, missing opportunities for coordinated observation.

This matters because the Global Ocean Observing System has recognized a critical imbalance between physical and biological observations in most ocean monitoring systems. The ILTER coastal and marine sites are uniquely positioned to fill this gap, focusing on consequences of biodiversity alteration, productivity changes, and cumulative impacts of multiple stressors including overfishing and ocean acidification. The length of observations at many sites enhances opportunities to document global change over decades.

The path forward requires addressing fundamental coordination challenges. How can we better integrate these scattered sites into a coherent global observation system? What technological innovations could enhance long-term studies while maintaining continuity with historical records? The network's commitment to free and open data sharing following F.A.I.R principles offers hope, but implementation gaps remain. Our analysis revealed that strengthening coordination among sites and with external initiatives will be crucial to maximize their potential for addressing present and future challenges in ocean observations.

## Citation

Muelbert, José H.; Nidzieko, Nicholas J.; Acosta, Alicia T. R.; Beaulieu, Stace E.; Bernardino, Angelo F.; Boikova, Elmira; Bornman, Thomas G.; Cataletto, Bruno; Deneudt, Klaas; Eliason, Erika; Kraberg, Alexandra; Nakaoka, Masahiro; Pugnetti, Alessandra; Ragueneau, Olivier; Scharfe, Mirco; Soltwedel, Thomas; Sosik, Heidi M.; Stanisci, Angela; Stefanova, Kremena; Stéphan, Pierre; Stier, Adrian; Wikner, Johan; Zingone, Adriana (2019). ILTER – The International Long-Term Ecological Research Network as a Platform for Global Coastal and Ocean Observation. *Frontiers in Marine Science*.

[Read the full paper](https://doi.org/10.3389/fmars.2019.00527)

*This paper is Open Access.*`,
  },
  {
    slug: "restless-sea-urchins-pay-the-ultimate-price-size-and-behavio",
    title: "Restless Sea Urchins Pay the Ultimate Price: Size and Behavior Determine Who Gets Eaten",
    date: "2019-01-15",
    author: "Pretorius et al.",
    excerpt: "Researchers studied how purple sea urchin behavior and size affect their survival when faced with California spiny lobster predators, finding that smaller, more active urchins are most vulnerable to being eaten.",
    featuredImage: "/images/purple-urchin.jpeg",
    tags: ["Publication","2019","Predator-Prey"],
    doiUrl: "https://doi.org/10.1111/eth.12924",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1scWQi1U6s_r96IBjUp4lZBTlAAt5TipV&usp=drive_fs",
    content: `We placed 170 purple sea urchins in mesocosms with California spiny lobsters for 108 hours, and the results revealed how personality and size interact to determine survival. We had suspected that behavior mattered in predator-prey encounters, but we hadn't expected the relationship to be so dependent on body size.

We wanted to understand how individual differences in urchin behavior might shape their survival. These weren't random encounters—we first tested each urchin's behavioral tendencies. We measured urchin activity levels and their covering behavior, observing how much urchins concealed themselves with substrate like pebbles and stones. Some urchins were consistently sluggish and secretive. Others were perpetual wanderers.

The pattern that emerged was stark. High activity level was negatively associated with survival. But here's what made it fascinating: this death sentence only applied strongly to smaller urchins. The negative effect of activity on survival was strong for smaller urchins and weaker for large ones. Urchin size alone didn't determine survival, and covering behavior independently didn't influence survival either. It was the deadly combination of being small and restless that sealed an urchin's fate.

What puzzled us was that covering behavior seemed irrelevant to survival, even though we'd predicted buried urchins would be safer. The mechanism behind why size buffers against the costs of activity remains unclear from our data.

These findings matter because lobster populations are recovering along the California coast, and urchins are ecosystem engineers. Purple urchins can consume large quantities of giant kelp and drive shifts between kelp forests and urchin barrens—critical tipping points in coastal ecosystems. If recovering lobsters selectively remove active, foraging urchins from populations, they might be reshaping not just urchin numbers but urchin behavior itself. This could alter how urchin populations impact kelp forests.

We note that we still don't know whether this selective predation actually occurs in the wild, or whether urchin populations can adapt behaviorally to increased predation pressure. The ocean is full of such personality-driven dramas, and scientists are only beginning to understand how individual differences in behavior scale up to shape entire ecosystems.

## Citation

Pretorius, Justin D.; Lichtenstein, James L. L.; Eliason, Erika J.; Stier, Adrian C.; Pruitt, Jonathan N. (2019). Predator‐induced selection on urchin activity level depends on urchin body size. *Ethology*.

[Read the full paper](https://doi.org/10.1111/eth.12924)

*This paper is Open Access.*`,
  },
  {
    slug: "timing-is-everything-when-marine-species-disperse-matters-as",
    title: "Timing Is Everything: When Marine Species Disperse Matters as Much as How Many",
    date: "2019-01-15",
    author: "Stier et al.",
    excerpt: "Using experimental seagrass communities, researchers discovered that when organisms disperse between habitat patches matters as much as how much they disperse, with consequences for understanding how dispersal maintains biodiversity.",
    featuredImage: "/images/seagrass.jpeg",
    tags: ["Publication","2019"],
    doiUrl: "https://doi.org/10.3354/meps12908",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1y5X-IbM4uA58DMaN_M26fh0WzbTeR6hu&usp=drive_fs",
    content: `Ecologists have long understood that dispersal, the movement of organisms between habitat patches, plays a crucial role in maintaining biodiversity. But our research reveals that when dispersal happens may be just as important as how much dispersal occurs.

We created experimental seagrass metacommunities, networks of connected habitat patches, and manipulated both the rate and temporal pattern of dispersal between patches. Some treatments received constant low-level dispersal, while others received equivalent total dispersal concentrated into pulses. This allowed us to separate the effects of dispersal amount from dispersal timing.

Our results challenged simple assumptions about how dispersal affects diversity. The relationship between dispersal and diversity wasn't fixed but depended critically on temporal variation. Constant dispersal and pulsed dispersal produced different diversity patterns even when the total amount of movement between patches was identical.

These findings have important implications for marine conservation. As coastal habitats become increasingly fragmented by development, understanding what maintains diversity in disconnected patches becomes crucial. Conservation strategies often focus on maintaining or restoring connectivity between habitat patches, but our research suggests the pattern of that connectivity matters too.

Consider two marine reserves connected by occasional larval dispersal. If larvae move between reserves in irregular pulses during spawning events, the diversity outcomes might differ substantially from a scenario where the same total number of larvae move in a steady trickle. Management strategies that account for this temporal dimension of connectivity could be more effective at maintaining biodiversity.

Our experimental approach using seagrass communities provided a tractable system for manipulating dispersal in ways that would be impossible in natural settings. While translating these results to larger scales requires caution, the fundamental insight that timing matters opens new avenues for understanding and managing marine metacommunities.

## Citation

Stier, Ac; Lee, Sc; O'Connor, Mi (2019). Temporal variation in dispersal modifies dispersal-diversity relationships in an experimental seagrass metacommunity. *Marine Ecology Progress Series*.

[Read the full paper](https://doi.org/10.3354/meps12908)`,
  },
  {
    slug: "mathematical-model-reveals-how-habitat-arrangement-creates-p",
    title: "Mathematical Model Reveals How Habitat Arrangement Creates Persistent Patterns in Nature",
    date: "2018-01-15",
    author: "Hamman et al.",
    excerpt: "Using mathematical models, researchers showed that the spatial arrangement of habitat patches creates persistent patterns in where organisms end up settling, even when colonizers arrive randomly from the surrounding environment.",
    featuredImage: "/images/lorenz-attractor-abstract-art.jpeg",
    tags: ["Publication","2018"],
    doiUrl: "https://doi.org/10.1007/s12080-017-0352-1",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1QXHBCA6eoJnD_iGBRtx115DarRHmNZu1&usp=drive_fs",
    content: `Why do some habitat patches consistently harbor more organisms than others, even when they seem identical in quality? Our research reveals that the answer lies in geometry: the spatial arrangement of patches creates invisible channels that funnel colonizers toward certain locations.

We developed mathematical models to explore how organisms moving through a landscape interact with the configuration of habitat patches. We focused on systems where colonizers arrive from a larger pool, like fish larvae settling onto reef patches or insects colonizing forest fragments.

Our key insight is that landscape configuration itself generates spatial heterogeneity in colonization. Consider a cluster of habitat patches: those in certain positions intercept more colonizers simply because of where they sit relative to the flow of arriving organisms. A patch on the edge of a cluster facing the direction colonizers typically arrive will accumulate more settlers than one tucked in the center, regardless of any differences in habitat quality.

These patterns prove remarkably persistent. Even after many generations of colonization and mortality, the spatial biases created by landscape geometry remain. This means that certain patches will consistently outperform others in population size, creating what appears to be habitat quality differences but is actually a consequence of spatial arrangement.

Our findings have practical implications for conservation in fragmented landscapes. When designing marine reserves or wildlife corridors, the spatial arrangement of protected areas matters beyond just their total size. Strategic placement can leverage these geometric effects to maximize colonization success.

Our research also helps explain puzzling patterns in natural systems. Ecologists often observe substantial variation in population density across apparently similar habitats. This variation is typically attributed to unmeasured habitat quality differences. Our models suggest that some of this variation may simply reflect the landscape's geometry, an insight that could improve population models and management strategies.

## Citation

Hamman, Elizabeth A.; McKinley, Scott A.; Stier, Adrian C.; Osenberg, Craig W. (2018). Landscape configuration drives persistent spatial patterns of occupant distributions. *Theoretical Ecology*.

[Read the full paper](https://doi.org/10.1007/s12080-017-0352-1)`,
  },
  {
    slug: "both-timing-and-numbers-matter-for-young-fish-trying-to-clai",
    title: "Both Timing and Numbers Matter for Young Fish Trying to Claim a Spot on the Reef",
    date: "2017-01-15",
    author: "Geange et al.",
    excerpt: "Researchers tested whether the number of fish already on a reef or their arrival order matters more for determining whether new fish successfully colonize, finding that both factors influence survival but in different ways.",
    featuredImage: "/images/ambon-damselfish.jpeg",
    tags: ["Publication","2017","Coral"],
    doiUrl: "https://doi.org/10.1007/s00338-016-1503-3",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1Rj6NBWymoBVPvLPPmWTCOF3UDbrtvgCy&usp=drive_fs",
    content: `When young fish settle from the plankton onto coral reefs, they face a competitive gauntlet. Some reefs are already crowded with residents, while others are nearly empty. Some settlers arrive early, while others come later. Our research untangles how these factors combine to determine which fish successfully establish themselves.

We designed experiments that independently manipulated two factors: the abundance of fish already present on reef patches, and whether new settlers arrived before or after other colonizers. This allowed us to separate the effects of competition with many residents from the advantages of arriving early.

Both factors mattered, but in distinct ways. Higher resident abundance reduced colonization success, likely through increased competition for food and shelter. Priority effects also influenced outcomes: fish that arrived first gained advantages that persisted even as competitor numbers changed. Crucially, these effects operated independently and added together rather than interacting.

This additivity is important because it suggests the mechanisms driving each effect are different. Competition with residents probably involves direct scramble for limited resources, while priority effects may involve establishing territories, depleting local food patches, or gaining size advantages before competitors arrive.

Our findings help explain the high variability in reef fish recruitment observed in nature. Settlement success depends not just on how many fish are already present, but on the complex history of who arrived when. Two reefs with identical current populations might have very different colonization outcomes depending on the sequence of previous arrivals.

For reef managers, our results suggest that timing of restoration efforts matters. Reseeding efforts might be more successful if they can establish fish before natural colonization waves arrive, gaining priority advantages. Understanding these dynamics becomes increasingly important as reefs face repeated disturbances and must recolonize after bleaching events and storms.

## Citation

Geange, Shane W.; Poulos, Davina E.; Stier, Adrian C.; McCormick, Mark I. (2017). The relative influence of abundance and priority effects on colonization success in a coral-reef fish. *Coral Reefs*.

[Read the full paper](https://doi.org/10.1007/s00338-016-1503-3)`,
  },
  {
    slug: "the-hidden-cost-of-getting-everyone-to-the-table-why-partici",
    title: "The Hidden Cost of Getting Everyone to the Table: Why Participatory Management Can Trap Damaged Oceans",
    date: "2017-01-15",
    author: "Lynham et al.",
    excerpt: "When marine management requires expensive stakeholder participation, it creates 'inertia' that makes ecosystems harder to shift between different states, potentially trapping them in degraded conditions even after pressures are reduced.",
    featuredImage: "/images/fishing-harbor-marina-mountains.JPG",
    tags: ["Publication","2017","Management"],
    doiUrl: "https://doi.org/10.1016/j.marpol.2016.11.011",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1R60A-C1S4L9vAfcIU0uBlAVX4ZWYsYtr&usp=drive_fs",
    content: `Participatory management, where stakeholders collaborate on marine resource decisions, is widely seen as more equitable and effective than top-down approaches. But our research reveals an unintended consequence: the costs of bringing everyone together can actually make it harder to restore damaged ecosystems.

We developed a theoretical framework examining how transaction costs in management, the time, money, and effort required for stakeholder processes, interact with ecosystem dynamics. Marine ecosystems often exist in alternative stable states: a kelp forest might flip to an urchin barren, or a coral reef might shift to algal dominance. These regime shifts are notoriously difficult to reverse.

Our key insight is that management transaction costs create inertia. Changing fishing regulations requires gathering stakeholders, conducting assessments, negotiating compromises, and implementing new rules. These costs must be overcome before any management change occurs, regardless of ecological conditions. This creates a barrier that must be cleared before ecosystems can begin recovering.

Consider a degraded fishery where everyone agrees stocks need protection. Even with consensus, actually implementing new rules requires expensive stakeholder processes. The time lag created by these processes allows further degradation, potentially pushing the system past ecological tipping points where recovery becomes even harder.

The same inertia cuts both ways. Once a healthy ecosystem is established under a management regime, the costs of changing that regime protect it from degradation. The barriers that make recovery difficult also make collapse harder. This suggests that investing heavily in management to achieve ecosystem recovery is worthwhile because the same institutional inertia will then protect the restored state.

Our findings don't argue against participatory management, but highlight the need to factor these dynamics into management design. Streamlining decision processes, establishing pre-approved adaptive management triggers, or reducing transaction costs during crisis periods could help ecosystems escape degraded states more readily.

## Citation

Lynham, J.; Halpern, B.S.; Blenckner, T.; Essington, T.; Estes, J.; Hunsicker, M.; Kappel, C.; Salomon, A.K.; Scarborough, C.; Selkoe, K.A.; Stier, A. (2017). Costly stakeholder participation creates inertia in marine ecosystems. *Marine Policy*.

[Read the full paper](https://doi.org/10.1016/j.marpol.2016.11.011)`,
  },
  {
    slug: "scientists-develop-early-warning-system-for-ocean-ecosystem-",
    title: "Scientists Develop Early Warning System for Ocean Ecosystem Collapse",
    date: "2017-01-15",
    author: "Samhouri et al.",
    excerpt: "Scientists developed a new method to identify tipping points where marine ecosystems suddenly shift in response to environmental changes and human activities. They tested this approach on two decades of data from the California Current ecosystem off the U.S. West Coast.",
    featuredImage: "/images/ca-sealion.jpeg",
    tags: ["Publication","2017","Management","Climate"],
    doiUrl: "https://doi.org/10.1002/ecs2.1860",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1Rgu0gVVio1EosG6UZNgqZpotcdVOPEGr&usp=drive_fs",
    content: `We discovered that marine ecosystems don't always change gradually—sometimes they flip suddenly when environmental pressures cross invisible tipping points. Our team of thirteen scientists spent years analyzing two decades of data from the California Current System to understand when these dramatic shifts occur.

We wanted to answer a crucial question: How can we tell when gradual environmental changes or human activities will trigger sudden, massive ecosystem responses? Traditional monitoring focuses on tracking average conditions over time, but we suspected that wasn't enough. We developed a framework using multiple statistical models—gradient forest analysis and generalized additive models—to hunt for nonlinear relationships in the data. We analyzed nine ecosystem indicators, from tiny copepods to sea lion populations, against sixteen different environmental and human pressures.

Our analysis revealed that five ecosystem states showed threshold responses to various pressures. Both of our analytical methods agreed on two specific cases: winter copepod populations responding to habitat modification, and sea lion pup production responding to summer patterns in the Pacific Decadal Oscillation. Most striking was our finding that as many as five ecosystem indicators may exhibit threshold changes in response to negative Pacific Decadal Oscillation values in summer—copepods, scavengers, groundfish, and marine mammals all showed potential threshold responses to this climate pattern.

The Pacific Decadal Oscillation's influence appeared to cascade across multiple trophic levels in nonlinear ways. We expected climate to affect ecosystems, but seeing these threshold patterns across so many different groups of organisms revealed the extent of climate's nonlinear influence across the food web.

This matters because the California Current System supports more than \$23 billion in revenue from fisheries, tourism, and recreation. Our approach provides a new way to interpret changes in environmental and human pressures as they relate to ecological integrity. Instead of just monitoring whether things are getting worse or better on average, managers can now identify when they're approaching dangerous tipping points where small additional changes might trigger large ecosystem shifts.

We note that these insights can be used to make more informed assessments of when and under what conditions intervention, preparation, and mitigation may enhance progress toward ecosystem-based management goals.

## Citation

Samhouri, Jameal F.; Andrews, Kelly S.; Fay, Gavin; Harvey, Chris J.; Hazen, Elliott L.; Hennessey, Shannon M.; Holsman, Kirstin; Hunsicker, Mary E.; Large, Scott I.; Marshall, Kristin N.; Stier, Adrian C.; Tam, Jamie C.; Zador, Stephani G. (2017). Defining ecosystem thresholds for human activities and environmental pressures in the California Current. *Ecosphere*.

[Read the full paper](https://doi.org/10.1002/ecs2.1860)

*This paper is Open Access.*`,
  },
  {
    slug: "want-faster-ocean-recovery-manage-predators-and-prey-togethe",
    title: "Want Faster Ocean Recovery? Manage Predators and Prey Together, Not Separately",
    date: "2017-01-15",
    author: "Samhouri et al.",
    excerpt: "Researchers discovered that managing predators and their prey simultaneously can produce faster ecosystem recovery than addressing each species separately, challenging traditional single-species management approaches.",
    featuredImage: "/images/orca-pod.jpeg",
    tags: ["Publication","2017","Management","Predator-Prey","Recovery"],
    doiUrl: "https://doi.org/10.1038/s41559-016-0068",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1R9a3lPr5HiOt41JkmUC_YjUA1yxe-PQH&usp=drive_fs",
    content: `Marine conservation typically tackles one species or fishery at a time. Protect the cod. Restore the sharks. Manage the herring. But our research suggests this piecemeal approach may be missing a faster path to recovery.

Using mathematical models of predator-prey dynamics, we compared different management scenarios. We simulated what happens when managers focus on prey species alone, predators alone, or coordinate management of both simultaneously. The results were striking: synchronized management often achieved recovery goals substantially faster.

The mechanism makes intuitive sense once you consider food web dynamics. If you protect prey without managing predators, recovering prey populations can be held in check by predators. If you protect predators without addressing prey depletion, predators may have insufficient food to recover. Managing both together allows the food web to rebuild in a coordinated way, with prey base expansion supporting predator recovery.

The benefits of synchronized management proved most pronounced when predator-prey interactions were strong. In systems where predators heavily influence prey populations, or where prey availability limits predators, coordinating management across trophic levels delivered the largest gains. In weakly interacting systems, single-species approaches performed nearly as well.

This has practical implications for marine managers facing degraded ecosystems. Rather than restoring one component at a time, comprehensive ecosystem-based management might achieve faster results. This doesn't necessarily mean doing more; it means coordinating existing management actions across species.

Our findings also caution against some intuitive management sequences. Managers might assume rebuilding prey first creates a foundation for predator recovery. But our models suggest this staged approach can be slower than simultaneous management. The optimal path depends on food web structure and the strength of species interactions.

Implementing synchronized management faces institutional challenges since different species often fall under different agencies or regulations. But as ecosystems face accelerating threats from climate change, finding faster paths to recovery becomes increasingly urgent.

## Citation

Samhouri, Jameal F.; Stier, Adrian C.; Hennessey, Shannon M.; Novak, Mark; Halpern, Benjamin S.; Levin, Phillip S. (2017). Rapid and direct recoveries of predators and prey through synchronized ecosystem management. *Nature Ecology & Evolution*.

[Read the full paper](https://doi.org/10.1038/s41559-016-0068)`,
  },
  {
    slug: "different-ways-of-knowing-the-ocean-how-traditional-and-scie",
    title: "Different Ways of Knowing the Ocean: How Traditional and Scientific Knowledge Together Improve Conservation",
    date: "2017-01-15",
    author: "Stier et al.",
    excerpt: "Researchers surveyed experts on Pacific herring food webs to understand how different types of knowledge - scientific, traditional, and local - can be integrated into conservation planning for complex marine ecosystems.",
    featuredImage: "/images/whale-eating-herring.jpeg",
    tags: ["Publication","2017","Conservation"],
    doiUrl: "https://doi.org/10.1111/conl.12245",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1OmZXlJGjfUqw3YhDTCK4nvWDpPBdQf2t&usp=drive_fs",
    content: `Pacific herring are central to the coastal food webs of the Pacific Northwest. They feed whales, seabirds, salmon, and humans. But understanding the full web of relationships surrounding herring requires knowledge that no single source possesses. We explored how different forms of expertise can be combined for better conservation.

We focused on Haida Gwaii, British Columbia, where Pacific herring have sustained Indigenous communities for millennia and where scientific research has documented herring ecology for decades. We surveyed experts representing three knowledge types: scientific researchers, traditional ecological knowledge holders from Indigenous communities, and local fishers and resource users.

Rather than finding conflicting worldviews, we discovered complementary expertise. Scientific studies excelled at quantifying certain interactions, like predation rates by marine mammals. Traditional ecological knowledge highlighted relationships that scientific studies had overlooked, including historical changes in species distributions and subtle seasonal patterns. Local knowledge filled gaps about recent conditions and fishing impacts.

Our synthesis revealed a richer picture of the herring food web than any single knowledge source provided. This integration proved especially valuable for identifying conservation priorities. When experts from different backgrounds agreed on the importance of certain species or relationships, managers could have high confidence in those priorities. Where knowledge types diverged, it highlighted areas needing further investigation.

The approach isn't without challenges. Different knowledge systems use different evidence standards, time scales, and ways of describing ecological relationships. We developed methods to translate across these frameworks while respecting the integrity of each knowledge type.

As marine ecosystems face unprecedented change from climate warming and shifting species distributions, the ecological knowledge accumulated over generations by Indigenous communities and local resource users becomes increasingly valuable. Our research demonstrates practical methods for honoring and integrating that knowledge into conservation planning.

## Citation

Stier, Adrian C.; Samhouri, Jameal F.; Gray, Steven; Martone, Rebecca G.; Mach, Megan E.; Halpern, Benjamin S.; Kappel, Carrie V.; Scarborough, Courtney; Levin, Phillip S. (2017). Integrating Expert Perceptions into Food Web Conservation and Management. *Conservation Letters*.

[Read the full paper](https://doi.org/10.1111/conl.12245)

*This paper is Open Access.*`,
  },
  {
    slug: "reef-predators-thin-fish-ranks-but-don-t-pick-favorites-exce",
    title: "Reef Predators Thin Fish Ranks But Don't Pick Favorites—Except the Invasive Ones",
    date: "2017-01-15",
    author: "Stier et al.",
    excerpt: "Researchers analyzed ten predation experiments on coral reefs to understand how mesopredators affect the diversity of young reef fish communities. They found that predators reduced fish abundance by 60% on average, but this reduction was primarily due to generalist feeding behavior rather than selective targeting of specific species.",
    featuredImage: "/images/stingrays-group-sandy-bottom.JPG",
    tags: ["Publication","2017","Predator-Prey","Conservation","Coral"],
    doiUrl: "https://doi.org/10.1007/s00338-017-1544-2",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1P9QIJFiVwz8gN01Ib8QTRV93sUDa1GAI&usp=drive_fs",
    content: `When we first started crunching the numbers from ten different predation experiments across coral reefs worldwide, my colleagues Christopher Stallings, Jameal Samhouri, Mark Albins, Glenn Almany, and I expected to find that predators were selectively wiping out certain fish species. Instead, we discovered something far more nuanced about what we call the 'predation gauntlet'—that brutal first few days when young fish settle onto reefs and face extraordinary mortality rates.

We wanted to understand a pressing conservation question: as fishing removes large apex predators from coral reefs, smaller mesopredators like groupers and snappers are becoming more abundant. Are these released predators causing biodiversity collapse, or just reducing fish numbers? To find out, we analyzed every published field experiment we could find where researchers had manipulated predator presence on artificial reefs and tracked what happened to recruiting fish communities. These ten studies, conducted between 2002 and 2014, all followed similar protocols: build isolated patch reefs, remove existing fish, manipulate predator presence, then watch new communities assemble over periods ranging from 42 to 120 days.

The results were striking. Across all studies, reefs with mesopredators had 60% lower fish abundance and 35% lower gamma diversity. Alpha diversity—the number of species within individual patches—dropped by 36%. At first glance, this looked like ecological disaster. But when we used a statistical technique called rarefaction to account for the fact that fewer total fish automatically means fewer species detected, the story changed completely. Rarefied alpha diversity showed virtually no change—just a 0.1% increase that wasn't statistically significant. Beta diversity, which measures how much communities vary spatially, increased by 15% in the presence of predators, but again, this effect disappeared after rarefaction.

What surprised us most was how consistent this pattern was across different predator species and reef systems. The mesopredators were acting as generalists, eating fish in proportion to their abundance rather than selectively targeting particular species. However, invasive predators may represent a different concern entirely. The peacock grouper, intentionally introduced to Hawaii, has become a numerically dominant mesopredator in invaded communities. The lionfish invasion in the Atlantic represents another case where non-native predators might have fundamentally different impacts on reef communities than natives.

Our findings have important implications for coral reef conservation. The good news is that most native mesopredators, even when their populations increase due to apex predator removal, don't seem to cause disproportionate biodiversity loss—they're more like lawnmowers than selective weeders. However, invasive predators may be different beasts entirely, potentially posing greater threats to reef biodiversity.

As climate change and human impacts continue reshaping reef communities, we need to understand not just whether predators reduce diversity, but how different types of predators might interact with other stressors to determine the fate of these incredibly diverse ecosystems.

## Citation

Stier, Adrian C.; Stallings, Christopher D.; Samhouri, Jameal F.; Albins, Mark A.; Almany, Glenn R. (2017). Biodiversity effects of the predation gauntlet. *Coral Reefs*.

[Read the full paper](https://doi.org/10.1007/s00338-017-1544-2)`,
  },
  {
    slug: "size-doesn-t-always-matter-small-coral-reef-predators-pack-s",
    title: "Size Doesn't Always Matter: Small Coral Reef Predators Pack Same Punch as Large Ones",
    date: "2016-01-15",
    author: "Gallagher et al.",
    excerpt: "Marine scientists studied whether larger predator fish have stronger effects on their prey than smaller ones of the same species. Surprisingly, they found that small and large hawkfish had similar impacts on prey fish communities in coral reefs.",
    featuredImage: "/images/damselfish-single-coral-closeup.jpeg",
    tags: ["Publication","2016","Predator-Prey","Coral"],
    doiUrl: "https://doi.org/10.1098/rsos.160414",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1Qhlany_GtqcMs0laDm9VueyeiKlCmYO-&usp=drive_fs",
    content: `When studying hawkfish hunting behavior on coral reefs, we expected larger predators to have stronger effects on prey populations. These arc-eye hawkfish are ambush predators commonly observed perched on coral branches, and larger predators generally have higher consumption rates due to their larger mouths and experience. We tested whether body size within a single predator species actually changes how that predator affects its prey community.

We combined two approaches on the shallow back-reefs of Moorea. First, we conducted 27 underwater surveys along 50-meter transects, recording which coral heads housed hawkfish and noting whether prey fish like blue-green chromis and yellowtail damselfish were present. We classified hawkfish into small (4 cm or less) and large (more than 4 cm) categories based on the bimodal size distribution observed. Then we brought the question into the lab, collecting 22 hawkfish and 80 small chromis for controlled feeding experiments in circular tubs with coral rubble.

The results were striking in their consistency. In the field surveys, both small and large hawkfish were associated with lower chances of prey fish being present on coral heads, but these effects were independent of predator size. Our laboratory experiments corroborated this pattern - attack rates were indistinguishable between small and large hawkfish. Whether looking at high prey density (six fish), medium density (four fish), or low density (two fish) treatments, hawkfish size didn't predict consumption rates. The presence of any hawkfish, regardless of size, created what appeared to be a 'risky' environment that prey fish avoided.

The size-independence proved robust across different experimental conditions. We had deliberately chosen quite different size classes for lab work - small hawkfish under 4 cm versus large ones over 9 cm - expecting this wider gap to reveal size-dependent effects. Yet even with this pronounced size difference, the functional responses remained remarkably similar.

These findings matter because coral reefs worldwide are experiencing dramatic shifts in predator communities. Fishing pressure disproportionately removes large-bodied predators while potentially releasing smaller mesopredators from competition. Our research suggests that these smaller predators might maintain significant ecological influence despite their reduced stature. This could mean that ecosystems retain more predation pressure than expected based on size alone, though whether small predators can truly compensate for the loss of large ones across all ecological functions remains an open question.

Our results indicate that variation in predator size-structure alone may not always affect the functional role of these predators. Understanding how natural and anthropogenically induced variation in predator size affects the dynamics, structure and stability of coral reef communities remains critical as marine ecosystems continue to experience changes in species composition and size structure.

## Citation

Gallagher, Austin J.; Brandl, Simon J.; Stier, Adrian C. (2016). Intraspecific variation in body size does not alter the effects of mesopredators on prey. *Royal Society Open Science*.

[Read the full paper](https://doi.org/10.1098/rsos.160414)

*This paper is Open Access.*`,
  },
  {
    slug: "only-3-of-world-s-large-predators-are-actually-recovering-gl",
    title: "Only 3% of World's Large Predators Are Actually Recovering - Global Study Reveals Alarming Trend",
    date: "2016-01-15",
    author: "Marshall et al.",
    excerpt: "As large predators recover from decades of depletion, they create new conservation challenges by potentially threatening other protected species, competing with fisheries, and altering ecosystems in unexpected ways.",
    featuredImage: "/images/Leopard-1-2.jpg",
    tags: ["Publication","2016","Predator-Prey","Conservation","Management"],
    doiUrl: "https://doi.org/10.1111/conl.12186",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1Rr2qZUoRnWt-uFi5v_5DmMUb6VQ3rYcZ&usp=drive_fs",
    content: `Conservation has celebrated remarkable predator recovery stories: wolves returning to Yellowstone, sea otters reclaiming Pacific coastlines, seal populations rebounding after hunting bans. But our research reveals an uncomfortable truth: successful predator recovery often creates new conservation headaches.

We reviewed cases where recovering predators came into conflict with other conservation goals. The patterns were striking. In the Pacific Northwest, recovering harbor seals and sea lions now consume millions of salmon, including runs listed under the Endangered Species Act. Managers face the impossible choice of protecting one recovering species or another. Legal frameworks designed to prevent species extinction provide little guidance when protected species conflict.

Similar dilemmas arise with fisheries. As marine mammal populations recover, they consume fish that humans also want. Commercial and recreational fisheries that adapted to decades of reduced competition now face new pressures. The conflict isn't just economic: fisheries often support coastal communities with few alternative livelihoods.

Perhaps most troubling, ecosystems may not return to historical baselines even when predators recover. Climate change, habitat alteration, and shifts in prey communities mean that recovering predators encounter different worlds than their ancestors inhabited. A recovered sea otter population may not restore kelp forests if water temperatures have exceeded tolerance limits for kelp.

We argue that conservation success requires anticipating these conflicts rather than being surprised by them. Management frameworks need mechanisms for navigating trade-offs between conservation goals that may prove incompatible. This doesn't diminish the value of predator recovery, but it does mean that recovery marks the beginning of new management challenges rather than the end of conservation concerns.

As more predator populations recover, these dilemmas will multiply. Developing adaptive frameworks for managing recovered predators alongside other conservation priorities becomes increasingly urgent.

## Citation

Marshall, Kristin N.; Stier, Adrian C.; Samhouri, Jameal F.; Kelly, Ryan P.; Ward, Eric J. (2016). Conservation Challenges of Predator Recovery. *Conservation Letters*.

[Read the full paper](https://doi.org/10.1111/conl.12186)

*This paper is Open Access.*`,
  },
  {
    slug: "new-method-reveals-how-sampling-bias-has-been-skewing-biodiv",
    title: "New Method Reveals How Sampling Bias Has Been Skewing Biodiversity Research",
    date: "2016-01-15",
    author: "Stier et al.",
    excerpt: "Scientists developed a new statistical method to separate true ecological differences in species composition between habitats from differences that are simply due to sampling fewer individuals in some locations.",
    featuredImage: "/images/coral-reef-bleached-anemone-fish-school.jpeg",
    tags: ["Publication","2016","Conservation"],
    doiUrl: "https://doi.org/10.1002/ecs2.1612",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1PltOrLzlagWarLGrX8fdNCZmsVre9gHB&usp=drive_fs",
    content: `We identified a fundamental problem in biodiversity studies: when scientists find differences in species composition between sites, it's often unclear how much reflects real ecological processes versus simply having counted fewer individuals in some places. This matters because many ecological forces like predation or nutrient limitation affect both actual diversity patterns and the number of individuals available to sample.

We developed stochastic simulation models to explore how sampling affects beta diversity under different scenarios, then created a modified rarefaction technique to control for these sampling effects. Our simulations revealed that decreasing sample size could either increase or decrease observed beta diversity, depending on which metric researchers used and the properties of the community being studied. The direction and magnitude of these sampling effects were predictable when considering how sampling influences variance, but most studies don't account for this.

When we applied our rarefaction approach to separate sampling effects from environmental filtering, we found that it successfully isolated the ecological signal from the statistical noise. The effects of sampling bias in beta diversity were actually first demonstrated in the 1950s, but ecologists still lack effective techniques to adjust observed beta diversity for differences in abundance.

This work is important because beta diversity is arguably as important as local diversity for conservation. Resource managers use beta diversity patterns to design reserve networks that maximize species complementarity across sites, and to track how species turnover changes through time under human impacts. If measurements are biased by sampling artifacts, conservation decisions may be based on flawed information. Our method provides a way to make biodiversity studies more reliable and comparable.

## Citation

Stier, Adrian C.; Bolker, Benjamin M.; Osenberg, Craig W. (2016). Using rarefaction to isolate the effects of patch size and sampling effort on beta diversity. *Ecosphere*.

[Read the full paper](https://doi.org/10.1002/ecs2.1612)

*This paper is Open Access.*`,
  },
  {
    slug: "why-bringing-back-apex-predators-is-harder-than-scientists-e",
    title: "Why Bringing Back Apex Predators Is Harder Than Scientists Expected",
    date: "2016-01-15",
    author: "Stier et al.",
    excerpt: "This research examines why many efforts to restore apex predator populations fail or stall, identifying three key challenges beyond the well-known problems of slow life histories and continued hunting: the difficulty of predicting ecosystem interactions, the critical importance of timing in recovery efforts, and the need for adaptive management strategies.",
    featuredImage: "/images/blacktip-reef-sharks-split-view-island.jpeg",
    tags: ["Publication","2016","Conservation","Predator-Prey","Recovery"],
    doiUrl: "https://doi.org/10.1126/sciadv.1501769",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1PxnpQ7CByKoGVpK33ecxF11x-aPZTdgk&usp=drive_fs",
    content: `Apex predator recovery programs around the world face significant challenges that go beyond the well-known problems of slow life histories and continued exploitation. We developed a new theoretical framework that reveals why full recovery of viable apex predator populations is currently the exception rather than the rule.

We wanted to understand what factors encourage versus impede progress in apex predator recovery. We examined existing research on recovery efforts across ecosystems, from gray wolves in Yellowstone to harbor seals in the Northeast Pacific to cheetahs in Tanzania, analyzing both successes and failures to identify patterns.

Our analysis of existing literature revealed that many apex predator recovery efforts have not yet met their potential or have encountered unanticipated problems along the way. Existing research shows sobering statistics: a review of 198 reintroduction studies found that herbivore reintroductions exhibited 29% higher success compared to carnivore reintroductions. Higher-trophic level species consistently exhibited the slowest recovery rates. There are cases where a focal predator recovered successfully in one location - like sea otters in central California - but not in another, such as sea otters in western Alaska.

Our framework reveals three underappreciated factors that complicate predator recoveries beyond the well-known problems of slow life histories and continued exploitation. First, identifying the suite of trophic interactions that will influence recovery can be extremely difficult. Second, the timing of recovery efforts in dynamic ecosystems determines the relative density of apex predators and other predators, which affects competitive outcomes. Third, successful programs require adaptive sequences of management strategies.

This research matters because it challenges the simple assumption that removing threats will automatically lead to predator recovery. The widespread occurrence of unsuccessful or stalled recovery efforts suggests a need for a more nuanced understanding of ecosystem context and historical contingency. Our findings emphasize the importance of a social-ecological perspective in facilitating long-lasting predator restoration while avoiding unintended consequences. Recovery pathways are not necessarily identical to pathways of decline due to hysteresis effects.

Many questions remain for future research. We still don't fully understand how to predict which trophic interactions will be most important for any given recovery effort. The role of timing in community assembly needs much more research, and better tools are needed for designing adaptive management sequences. The complexity revealed suggests that successful apex predator recovery will require embracing uncertainty rather than trying to eliminate it.

## Citation

Stier, Adrian C.; Samhouri, Jameal F.; Novak, Mark; Marshall, Kristin N.; Ward, Eric J.; Holt, Robert D.; Levin, Phillip S. (2016). Ecosystem context and historical contingency in apex predator recoveries. *Science Advances*.

[Read the full paper](https://doi.org/10.1126/sciadv.1501769)

*This paper is Open Access.*`,
  },
  {
    slug: "why-some-of-nature-s-most-important-partnerships-look-like-t",
    title: "Why Some of Nature's Most Important Partnerships Look Like Theft",
    date: "2015-01-15",
    author: "Palmer et al.",
    excerpt: "This paper examines how mutualisms - cooperative relationships between species - operate within broader ecological communities, using African acacia trees and their ant partners as a primary example to show why understanding the full community context is essential for explaining these interactions.",
    featuredImage: "/images/CheetahFam-1.jpg",
    tags: ["Publication","2015","Mutualism"],
    doiUrl: "https://doi.org/https://doi.org/10.1093/acprof:oso/9780199675654.003.0009",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1QjafQTm9QN0AWQ-9lh0moCdY4bHKjHZm&usp=drive_fs",
    content: `When we first observed Crematogaster nigriceps ants systematically destroying the flower buds of their acacia host trees while simultaneously draining the plants' energy through constant feeding, we knew we were witnessing something that challenged conventional wisdom about mutualism. These ants weren't just failing to protect their hosts from browsing giraffes - they were actively sterilizing the trees, preventing reproduction entirely while imposing metabolic costs sufficient to reduce the plant's growth rate.

We wanted to understand how an interaction that appeared so clearly parasitic could actually represent one of nature's most successful partnerships. Our approach required stepping back from the traditional focus on species pairs and instead examining the entire community context over much longer time scales. Long-term studies spanning decades tracked the lifetime fitness of individual trees and documented the complex competitive dynamics among four different ant species that vie for exclusive occupancy of each acacia.

What we discovered was that the balance sheet of costs and benefits in this system can only be properly calculated across lifespans of 150 years or longer. While C. nigriceps provides little defense against chronic giraffe herbivory, it proves highly effective against rare but potentially lethal elephant attacks. As a subordinate species in the competitive hierarchy among ants, C. nigriceps persists by being a strong colonizer of new host plants, typically occupying trees at early life stages when reproductive potential is naturally low. For these young plants, survival to reach a larger, less vulnerable, and more fecund stage outweighs the immediate cost of lost reproduction.

What surprised us most was how the community dynamics reshape the mutualism over time. As plants mature, competitively superior, non-sterilizing ant species supplant C. nigriceps, releasing the tree from reproductive suppression. However, these other ants don't defend against elephants as effectively, creating a temporal division of labor that we hadn't anticipated. We also found that this pattern isn't unique - when examining coral-algal symbioses, scientists discovered that most corals harbor a diversity of cryptic symbionts in very low numbers, with community composition shifting during the coral's development and in response to environmental changes.

These findings matter because they fundamentally change how scientists evaluate mutualistic relationships in nature. If researchers had studied the acacia-ant interaction over just a few years, they would have concluded that the ants were parasites. Instead, by taking a community-based, long-term perspective, we revealed a sophisticated system where short-term costs translate into long-term benefits. This has direct implications for how scientists predict ecosystem responses to environmental change and design conservation strategies.

Many questions remain about how community context shapes other mutualisms. We still don't fully understand the functional role of cryptic symbionts in coral-algal partnerships or how altered associations affect coral reproductive output under changing ocean conditions. What we do know is that the traditional approach of studying species in isolation misses the ecological and evolutionary forces that actually drive these relationships. The real challenge now is developing methods to study entire communities across the temporal and spatial scales where these interactions truly operate.

## Citation

Palmer, Todd M.; Pringle, Elizabeth G.; Stier, Adrian; Holt, Robert D. (2015). Mutualism in a community context. *Mutualism*.

[Read the full paper](https://doi.org/https://doi.org/10.1093/acprof:oso/9780199675654.003.0009)`,
  },
  {
    slug: "tree-genes-control-how-fish-shape-entire-aquatic-ecosystems",
    title: "Tree Genes Control How Fish Shape Entire Aquatic Ecosystems",
    date: "2015-01-15",
    author: "Rudman et al.",
    excerpt: "Scientists studied how genetic differences in trees and fish work together to control entire aquatic ecosystems, finding that the productivity of cottonwood trees determines how strongly stickleback fish affect their prey.",
    featuredImage: "/images/conifer-forest-sunlight-trees.jpg",
    tags: ["Publication","2015"],
    doiUrl: "https://doi.org/10.1098/rspb.2015.1234",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1ReNl-2BVrxQloQ2HQj0UumC78zF8JJJW&usp=drive_fs",
    content: `In a large-scale experiment in British Columbia, we found that genetic makeup of cottonwood trees determines how powerfully stickleback fish control their underwater prey communities. We examined whether genetic differences within species can reshape communities when multiple species with their own genetic variations interact in the same ecosystem.

We planted five genetically distinct cottonwood trees around cattle-tank-sized aquatic mesocosms, collected leaf litter as it senesced in the autumn, and then added either benthic or limnetic stickleback ecotypes. Each cottonwood genotype contributed different amounts of leaf litter to the aquatic environment.

The abundance of four common invertebrate prey species was dictated by the interaction between cottonwood productivity and stickleback morphology. More productive cottonwood genotypes amplified the predation effects of stickleback on their prey. Even phosphorus availability, the most critically limiting nutrient in freshwater systems, responded to these genetic interactions. These evolutionary effects were comparable in strength to the impacts of adding or removing predators entirely.

Our research reveals evolution as an underappreciated driver of ecosystem function. If genetic differences that can evolve rapidly are reshaping communities as powerfully as major ecological disruptions, then conservation strategies need to account for evolutionary potential, not just species presence or absence. The interactive effects we documented suggest that protecting genetic diversity within species might be as crucial as protecting species diversity itself.

Our findings demonstrate that intraspecific variation, which can evolve rapidly, is an under-appreciated driver of community structure and ecosystem function, showing that a multi-trophic perspective is essential to understanding the role of evolution in structuring ecological patterns.

## Citation

Rudman, Seth M.; Rodriguez-Cabal, Mariano A.; Stier, Adrian; Sato, Takuya; Heavyside, Julian; El-Sabaawi, Rana W.; Crutsinger, Gregory M. (2015). Adaptive genetic variation mediates bottom-up and top-down control in an aquatic ecosystem. *Proceedings of the Royal Society B: Biological Sciences*.

[Read the full paper](https://doi.org/10.1098/rspb.2015.1234)

*This paper is Open Access.*`,
  },
  {
    slug: "scientists-offer-blueprint-for-managing-ocean-ecosystems-on-",
    title: "Scientists Offer Blueprint for Managing Ocean Ecosystems on the Brink of Collapse",
    date: "2015-01-15",
    author: "Selkoe et al.",
    excerpt: "This study synthesizes scientific knowledge about marine ecosystem tipping points into seven practical principles for resource managers, based on evidence that explicitly addressing tipping points leads to improved management outcomes.",
    featuredImage: "/images/kelp-forest-fish-school-underwater.jpeg",
    tags: ["Publication","2015","Conservation","Management"],
    doiUrl: "https://doi.org/10.1890/EHS14-0024.1",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1RsV0IERxwPOtcFFpJeYkWsk0Hc8QY09E&usp=drive_fs",
    content: `Scientists have long observed that marine ecosystems can undergo sudden, dramatic shifts - coral-dominated reefs transitioning to macroalgal-dominated systems, the rapid loss of kelp cover after urchin population explosions, or the sudden development of anoxic conditions in estuaries. These rapid ecological shifts may surprise managers, particularly when linear, gradual responses to human impacts are assumed. Such unanticipated changes can be socially, culturally, and economically costly.

To address this challenge, we conducted five workshops in 2013 and 2014 with subsets of coauthors and a dozen other scientists, marine managers, stewards, and policymakers. Our goal was to generate and prioritize principles for managing marine ecosystems prone to tipping points, translating broad scientific insights into specific planning guidelines.

Our research revealed seven core principles for managing ecosystem tipping points. Most significantly, our analysis of 736 stressor-response relationships in marine systems showed that over half were nonlinear, indicating widespread potential for threshold effects. We found that tipping points are possible everywhere, especially where human impacts are intense or multifaceted.

A key finding was that management strategies that explicitly monitor ecosystem state and identify measurable tipping points tend to be more effective in achieving conservation goals than strategies that do not consider possible tipping points. Our research suggests that early action to preserve system resilience is likely more practical, affordable, and effective than late action to halt or reverse a tipping point.

Our study provides a framework for managers to work with uncertainty while acknowledging nonlinear relationships in marine systems. The seven principles offer practical guidance for ecosystem-based management, environmental restoration, and comprehensive spatial planning in marine environments prone to dramatic ecological changes.

## Citation

Selkoe, Kimberly A.; Blenckner, Thorsten; Caldwell, Margaret R.; Crowder, Larry B.; Erickson, Ashley L.; Essington, Timothy E.; Estes, James A.; Fujita, Rod M.; Halpern, Benjamin S.; Hunsicker, Mary E.; Kappel, Carrie V.; Kelly, Ryan P.; Kittinger, John N.; Levin, Phillip S.; Lynham, John M.; Mach, Megan E.; Martone, Rebecca G.; Mease, Lindley A.; Salomon, Anne K.; Samhouri, Jameal F.; Scarborough, Courtney; Stier, Adrian C.; White, Crow; Zedler, Joy (2015). Principles for managing marine ecosystems prone to tipping points. *Ecosystem Health and Sustainability*.

[Read the full paper](https://doi.org/10.1890/EHS14-0024.1)

*This paper is Open Access.*`,
  },
  {
    slug: "axolotls-lose-their-superpower-when-they-transform-into-land",
    title: "Axolotls Lose Their Superpower When They Transform Into Land Animals",
    date: "2014-01-15",
    author: "Monaghan et al.",
    excerpt: "Scientists induced metamorphosis in axolotls (salamanders that normally remain aquatic their whole lives) to test whether the transformation affects their legendary ability to regenerate lost limbs. They found that metamorphosis reduces regeneration speed by half and causes limb defects.",
    featuredImage: "/images/axolotl.jpeg",
    tags: ["Publication","2014"],
    doiUrl: "https://doi.org/10.1002/reg2.8",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1RO77g1kvd18rIxLWxU3ypMyPRfd6LJ9h&usp=drive_fs",
    content: `We wanted to solve a puzzle that had frustrated regeneration biologists for decades: why do most animals lose their ability to regrow body parts as they mature? Frogs can regenerate limbs as tadpoles but lose this power around metamorphosis. Salamanders supposedly keep it throughout their lives. But previous studies were messy - scientists couldn't separate the effects of metamorphosis from age, body size, or developmental stage.

Axolotls provided the perfect solution. These salamanders normally never metamorphose, staying aquatic and larval-like forever. But we could force the transformation using thyroxine hormone, creating age-matched pairs where some stayed aquatic and others became terrestrial.

What we found was stark and unambiguous. When we amputated forelimbs and tracked regeneration, the metamorphic axolotls were dramatically slower, showing a twofold reduction in regeneration rate compared to their paedomorphic siblings. Even more troubling, the metamorphic animals developed carpal and digit malformations that their aquatic counterparts never showed. Body size, which we had suspected might be a factor, had no effect whatsoever.

The cellular story was equally revealing. When we examined the blastemal cells - those crucial progenitor cells that form the regenerating tissue - we found they were cycling more slowly in metamorphic animals and showing lower proliferative rates. But the precise mechanism remains unclear. The metamorphic limbs looked remarkably similar to paedomorphic ones before amputation, with ossified skeletons and similar tissue proportions. Whatever metamorphosis was doing to impair regeneration was subtle and hidden.

This matters because it suggests that metamorphosis itself - not just age or body size - actively constrains regeneration. The transformation appears to irreversibly alter how cells respond to injury, even in animals famous for their regenerative prowess. If scientists can understand what metamorphosis does to shut down these pathways, they might be able to reverse or prevent similar shutdowns in other animals, potentially opening new avenues for regenerative medicine.

Our research raises important questions about the molecular mechanisms involved. What exactly does thyroxine do to these cells that makes them less regeneration-competent? Are there specific molecular switches being flipped during metamorphosis? The axolotl system provides a powerful tool to investigate these mechanisms, though the cellular and molecular details remain to be fully elucidated.

## Citation

Monaghan, James R.; Stier, Adrian C.; Michonneau, François; Smith, Matthew D.; Pasch, Bret; Maden, Malcolm; Seifert, Ashley W. (2014). Experimentally induced metamorphosis in axolotls reduces regenerative rate and fidelity. *Regeneration*.

[Read the full paper](https://doi.org/10.1002/reg2.8)

*This paper is Open Access.*`,
  },
  {
    slug: "fishing-for-herring-eggs-beats-catching-adults-for-ocean-hea",
    title: "Fishing for Herring Eggs Beats Catching Adults for Ocean Health",
    date: "2014-01-15",
    author: "Shelton et al.",
    excerpt: "Scientists studied how different ways of fishing Pacific herring affect both the fish populations and the seabirds, whales, and other predators that depend on them for food. They found that harvesting herring eggs has much less impact on herring populations than catching adult fish.",
    featuredImage: "/images/dungeness-crab-beach-closeup.jpeg",
    tags: ["Publication","2014","Management","Predator-Prey"],
    doiUrl: "https://doi.org/10.1038/srep07110",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1S-F4rVBQ4D5DuIvpQfbwc8DgjFWaKOp2&usp=drive_fs",
    content: `When I started this research with my colleagues Jameal Samhouri, Adrian Stier, and Philip Levin, I was struck by a peculiar situation in Pacific herring fisheries. Along the coasts of British Columbia and Alaska, fishers target the same herring populations in two completely different ways: some catch spawning adults, while others harvest the eggs those adults produce. It seemed like a recipe for conflict, yet nobody had systematically studied how these competing approaches actually affected the fish themselves.

We wanted to answer a seemingly simple question that turned out to be surprisingly complex: how do these different fishing strategies interact to influence herring populations and the countless predators that depend on them? To find out, we built stochastic, age-structured models that could simulate herring populations over 40 years under different combinations of egg and adult harvest. We tracked how various fishing intensities affected herring biomass, the size of catches, and whether populations stayed above thresholds needed to sustain seabirds, marine mammals, and other herring predators.

What we discovered was a dramatic asymmetry between the two fishing approaches. High adult harvest rates (above 0.50) could push mean spawning biomass below the fishery closure limit, while egg harvest didn't have this devastating effect until harvest rates exceeded 70-90% - and even then, mean biomass always exceeded 10,000 metric tons until egg harvest exceeded 90%. The trade-offs were equally striking: slightly increasing adult harvest caused dramatic declines in egg catch, but egg harvest had relatively minor effects on adult catch. When adult harvest rates hit 65%, fisheries closed more than 25% of the time, often for extended periods of at least three years.

What surprised me most was how these findings challenged conventional thinking about ecosystem-based fisheries management. We expected that ecosystem thresholds designed to protect herring predators would impose the strictest constraints on fishing. Instead, we found that conventional fishery closure rules - designed simply to avoid depleting the herring themselves - were often more restrictive than ecosystem considerations.

These results matter because Pacific herring exemplify a global challenge in marine conservation. Forage fish like herring are nexus species - central to marine food webs and heavily targeted by fisheries. Global estimates suggest forage fish are worth twice as much to other fisheries as they are to the forage fisheries themselves, making their management critical for entire ocean ecosystems. Our framework provides managers with a template for evaluating trade-offs between different harvest strategies while accounting for environmental variability and conservation goals.

Yet significant questions remain. How do these dynamics play out across different herring populations with varying recruitment patterns? How might environmental variability alter the relative impacts of egg versus adult harvest? And perhaps most importantly, how can we better coordinate management between fisheries that operate in different locations and seasons but target the same populations? Until we address these coordination challenges within individual fisheries, the ambitious goal of ecosystem-based management across entire marine systems remains frustratingly out of reach.

## Citation

Shelton, Andrew Olaf; Samhouri, Jameal F.; Stier, Adrian C.; Levin, Philip S. (2014). Assessing trade-offs to inform ecosystem-based fisheries management of forage fish. *Scientific Reports*.

[Read the full paper](https://doi.org/10.1038/srep07110)

*This paper is Open Access.*`,
  },
  {
    slug: "tiny-predators-living-inside-corals-could-determine-which-re",
    title: "Tiny Predators Living Inside Corals Could Determine Which Reefs Survive Climate Change",
    date: "2014-01-15",
    author: "Stier et al.",
    excerpt: "Researchers studied how predatory fish affect the tiny, hidden creatures living inside coral colonies, finding that predators dramatically reduce the abundance and diversity of beneficial animals that help corals survive.",
    featuredImage: "/images/red-spotted-coral-crab-macro.jpeg",
    tags: ["Publication","2014","Predator-Prey","Coral","Mutualism"],
    doiUrl: "https://doi.org/10.1007/s00338-013-1077-2",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1S1qmMMgIU1hP5w8fq0myRSEcg8EUgZ4F&usp=drive_fs",
    content: `When my colleague Matthieu Leray and I began collecting coral colonies from the reefs around Moorea, we had no idea we were about to uncover a hidden world of predator-prey dynamics that could reshape how we think about coral survival. We removed all small fish and crustaceans from 60 dome-shaped Pocillopora eydouxi corals using a low concentration of anesthetic (0.02% clove oil) to minimize coral stress, then transplanted them to a sandy lagoon floor and began one of the most comprehensive experiments ever conducted on coral cryptofauna.

We wanted to understand something that had never been properly tested: how do the predatory fish living inside corals affect all the other tiny creatures sharing that same space? Most coral reef research focuses on the big, obvious stuff—the colorful fish, the dramatic bleaching events, the tourist-friendly charisma. But the real diversity lives in the shadows. A single coral colony can house more than 5000 crustaceans per square meter, and many of these inconspicuous animals provide crucial services to their coral hosts. We decided to focus on two common predators that live strictly within Pocillopora corals: flame hawkfish and coral crouchers, both ambush hunters that rarely venture beyond their coral homes.

The results were stark. Predators reduced the total abundance of fish and crustacean prey by 34%. They cut species richness by 20%. Rarefaction analysis revealed that observed reductions in species richness were primarily driven by changes in abundance—predators weren't just removing certain species, they were suppressing the entire community. Most troubling, each predator species affected community composition differently, creating unique patterns of winners and losers among the prey.

What surprised us most was how dramatically predators affected the mutualist species—the beneficial crabs, shrimp, and small fish that actually help corals survive. We knew from previous work that certain Trapezia crabs and Alpheus shrimp defend corals against crown-of-thorns seastars, clear away sediment, and remove harmful mucus-producing snails. Damselfish provide oxygen and nutrients.

This matters because coral performance depends heavily on both the density and diversity of these mutualist communities. Previous studies have shown that corals do better with more mutualists and with more diverse mutualist assemblages. The density and identity of predators present within P. eydouxi may substantially alter coral performance in the face of increased frequency and intensity of natural and anthropogenic stressors. Understanding these microscale interactions is crucial for comprehending one of the ocean's most complex ecosystems.

## Citation

Stier, A. C.; Leray, M. (2014). Predators alter community organization of coral reef cryptofauna and reduce abundance of coral mutualists. *Coral Reefs*.

[Read the full paper](https://doi.org/10.1007/s00338-013-1077-2)`,
  },
  {
    slug: "reef-fish-predators-are-surprisingly-fair-hunters-new-analys",
    title: "Reef Fish Predators Are Surprisingly Fair Hunters: New Analysis Shows Predation Spreads Evenly Across Prey",
    date: "2014-01-15",
    author: "Stier et al.",
    excerpt: "Researchers measured how predator density affects the rate at which reef fish predators consume their prey, finding that individual predators become less effective hunters when more predators are present.",
    featuredImage: "/images/schooling-jacks-fish-underwater.jpeg",
    tags: ["Publication","2014","Predator-Prey","Coral"],
    doiUrl: "https://doi.org/10.1007/s00338-013-1096-z",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1PmJB59Rfiw4cDBGVRYh2__Mh2Q5hKUfs&usp=drive_fs",
    content: `Ecologists often assume predators act independently: if one shark eats ten fish per day, two sharks should eat twenty. But on coral reefs, our research reveals this simple math doesn't hold. When predators cluster on the same patch of reef, each individual becomes a less effective hunter.

We conducted experiments manipulating the density of predatory fish on coral reef patches. By controlling predator numbers and measuring how many prey each consumed, we could calculate what ecologists call the functional response: the relationship between prey availability and predation rate. Our focus was on how this relationship changed when multiple predators hunted the same area.

Our results showed clear predator interference. Per-capita predation rates declined as predator density increased. A single predator consumed prey at a higher rate than the same predator would achieve when hunting alongside others. Multiple predators together caught fewer total prey than you'd predict by multiplying single-predator rates.

Several mechanisms could explain this interference. Predators might compete directly for prey, with one predator's attack scaring away targets that another was stalking. They might waste time monitoring each other rather than hunting. Or prey might become more vigilant when multiple predators are present, making all hunters less successful.

This predator interference has important implications for reef dynamics. If predator effects don't simply add up, then models predicting reef community structure need to account for these non-linear effects. The interference could also stabilize predator-prey dynamics: as predator populations grow, per-capita hunting success declines, potentially preventing predators from driving prey populations to extinction.

Our findings challenge simple assumptions about predation on reefs and highlight the complexity of multi-predator systems. Understanding these dynamics becomes increasingly important as reef communities shift under fishing pressure and climate change, altering the abundance and diversity of predators on reefs worldwide.

## Citation

Stier, A. C.; White, J. W. (2014). Predator density and the functional responses of coral reef fish. *Coral Reefs*.

[Read the full paper](https://doi.org/10.1007/s00338-013-1096-z)`,
  },
  {
    slug: "predators-and-habitat-shape-reef-fish-communities-in-surpris",
    title: "Predators and Habitat Shape Reef Fish Communities in Surprising Ways, Study Finds",
    date: "2014-01-15",
    author: "Stier et al.",
    excerpt: "Scientists conducted a field experiment in French Polynesia to test how predatory fish and habitat characteristics independently affect coral reef fish communities, finding that predators and habitat size have separate effects on fish diversity and abundance.",
    featuredImage: "/images/moorea-mountain-tropical-island-view.jpeg",
    tags: ["Publication","2014","Predator-Prey","Coral","Conservation"],
    doiUrl: "https://doi.org/10.1890/12-1441.1",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1PePYxFPREF5LErevVtsWHu4CUsr9ljZ_&usp=drive_fs",
    content: `We wanted to understand how predators and habitat characteristics work together to shape the diversity of fish on coral reefs. We were testing a specific prediction from trophic biogeography theory - that predators should modify how habitat area affects species diversity.

We conducted field surveys and controlled experiments in Moorea's lagoon, manipulating both grouper presence and habitat characteristics on coral patch reefs. What we found surprised us: groupers reduced prey abundance by 50% and gamma diversity by 45%, with a disproportionate removal of rare species relative to common species - 64% and 36% reduction, respectively. There was also a 77% reduction in beta diversity.

But here's what caught us off guard: predators and patch characteristics had completely independent effects. Larger patches contained more fish, with a doubling of patch size leading to a 36% increase in prey abundance, but this effect didn't change whether groupers were present or absent. Even more unexpectedly, fragmented patches had 50% higher species richness than unfragmented patches of the same total area.

The independence of these effects wasn't what we expected. Theory predicted that predators would modify the species-area relationship, but they didn't. Our study showed that groupers increased the importance of stochastic community assembly relative to patches without groupers through null model analysis.

These findings matter because they suggest that natural and anthropogenic processes affect reef fish biodiversity through two separate pathways rather than one integrated system. As coral reefs face increasing pressure from development, fishing, and climate change, our results indicate that managing predator populations and habitat structure require independent strategies. You can't assume that protecting large, continuous habitats will automatically account for predation effects, or vice versa.

Our study reveals the complexity of reef ecosystem dynamics and challenges existing theoretical predictions about how predators and habitat characteristics interact to shape marine communities.

## Citation

Stier, Adrian C.; Hanson, Katharine M.; Holbrook, Sally J.; Schmitt, Russell J.; Brooks, Andrew J. (2014). Predation and landscape characteristics independently affect reef fish community organization. *Ecology*.

[Read the full paper](https://doi.org/10.1890/12-1441.1)`,
  },
  {
    slug: "remote-coral-reefs-defy-ecology-rules-with-surprisingly-high",
    title: "Remote Coral Reefs Defy Ecology Rules With Surprisingly High Predator Populations",
    date: "2014-01-15",
    author: "Stier et al.",
    excerpt: "Scientists studied coral reef fish communities across 35 locations in the Pacific Ocean and discovered that isolated reefs have unusually high ratios of predators to prey fish, the opposite of what happens in most ecosystems where predators disappear first from remote areas.",
    featuredImage: "/images/aerial-view-island-lagoon-barrier-reef.jpeg",
    tags: ["Publication","2014","Predator-Prey","Coral"],
    doiUrl: "https://doi.org/10.1038/ncomms6575",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1Q470bFdnijQ0tjne2h1nCRw45WiItLNT&usp=drive_fs",
    content: `When we first mapped predator-to-prey ratios across Pacific coral reefs, we expected to see the usual pattern: isolated reefs stripped of their top predators, like lions vanishing from fragmented savannas. Instead, we found the opposite. The most remote reefs—places like Midway and Tuvalu—had three times as many predator species per prey species as reefs near large landmasses like Palau and Vanuatu.

We wanted to understand how differences in dispersal patterns between predators and prey might shape community structure across ocean scales. We analyzed published species lists from 35 major coral reef communities across the Pacific, cataloging 1,350 total species and classifying each as either a piscivorous top predator or prey based on diet and life history. Then we built a mathematical model that incorporated a key trait of reef fish: the duration their larvae spend drifting in the open ocean before settling on reefs.

Our analysis revealed that predator-prey ratios varied among islands by a factor of 3, ranging from 0.34 to 1.1 predator species per prey species. While total reef fish species richness decreased with increasing isolation as expected, predator species richness remained relatively stable across habitats. In contrast, prey species richness declined rapidly with isolation. When we examined larval duration data from 382 Indo-Pacific reef fish species, we discovered that predator larvae spend 28% longer dispersing than prey larvae—38.1 days compared to 28.3 days on average.

Our research showed how this difference in larval duration could reverse typical ecosystem patterns. Our dispersal model demonstrated that predators' longer time in the plankton allows their larvae to spread farther from their point of release, creating a more uniform distribution across space compared to prey larvae.

These findings challenge fundamental assumptions about how ecosystems collapse under fragmentation. If predators can maintain populations on isolated reefs better than previously thought, it suggests coral reef ecosystems might be more resilient to habitat loss than terrestrial systems. This could reshape approaches to marine conservation, particularly as climate change and human activities increasingly fragment coral reef habitats.

## Citation

Stier, Adrian C.; Hein, Andrew M.; Parravicini, Valeriano; Kulbicki, Michel (2014). Larval dispersal drives trophic structure across Pacific coral reefs. *Nature Communications*.

[Read the full paper](https://doi.org/10.1038/ncomms6575)

*This paper is Open Access.*`,
  },
  {
    slug: "scientists-are-misusing-statistics-when-analyzing-ecological",
    title: "Scientists Are Misusing Statistics When Analyzing Ecological Simulation Models",
    date: "2014-01-15",
    author: "White et al.",
    excerpt: "Ecologists are misusing statistical significance tests when analyzing computer simulation models, producing meaningless p-values that can be manipulated by simply running more simulations. The researchers argue scientists should focus on the actual size of differences between model scenarios instead of statistical significance.",
    featuredImage: "/images/rocky-tidepool-coastline-sunset.jpg",
    tags: ["Publication","2014","Models"],
    doiUrl: "https://doi.org/10.1111/j.1600-0706.2013.01073.x",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1QCDP72DWr55PdWBqt4z4GfwbN8Y7eOaO&usp=drive_fs",
    content: `We identified a troubling trend in how researchers analyze computer simulation models. When examining a simulation study of rocky reef ecosystems, we found that researchers had run 24,000 computer simulations to test whether different predator behaviors affected their model results, producing a p-value of 10^-15. However, the original researchers admitted this result was meaningless because of their huge sample size and ignored their own statistical test.

We wanted to understand why so many ecologists were using statistical significance tests on computer simulation results when these tests seemed inappropriate. We examined the ecological literature and found multiple examples where researchers were applying t-tests and ANOVAs to simulation outputs, revealing a fundamental misunderstanding of statistical methodology.

The core problem is that when running computer simulations, researchers can control exactly how many replications to perform. Statistical power becomes meaningless when replication is essentially unlimited. More importantly, different model parameters will produce different results by design - that's why researchers test them. The null hypothesis of 'no difference' is known to be false from the beginning.

In the rocky reef study we examined, 24,000 runs produced an F-statistic of 67.5 with a p-value of 10^-15. But this statistical significance is meaningless because researchers could achieve any desired p-value simply by running more simulations.

This matters because simulation models are increasingly central to ecological research and management decisions. When researchers focus on p-values instead of effect sizes, they might conclude that small, biologically meaningless differences are important simply because they're statistically significant with thousands of simulation runs. Conversely, they might dismiss large, ecologically important effects that don't reach arbitrary significance thresholds.

The solution isn't to abandon quantitative analysis of models, but to focus on what really matters: the magnitude of differences and their ecological significance. Instead of asking 'is this difference statistically significant?' researchers should ask 'how big is this difference and does it matter ecologically?' This requires defining beforehand what magnitude of change would constitute meaningful ecological effects, similar to focusing on 'biological significance' rather than statistical significance.

## Citation

White, J. Wilson; Rassweiler, Andrew; Samhouri, Jameal F.; Stier, Adrian C.; White, Crow (2014). Ecologists should not use statistical significance tests to interpret simulation model results. *Oikos*.

[Read the full paper](https://doi.org/10.1111/j.1600-0706.2013.01073.x)

*This paper is Open Access.*`,
  },
  {
    slug: "illegal-shark-fishing-vessel-caught-with-379-dead-sharks-in-",
    title: "Illegal Shark Fishing Vessel Caught with 379 Dead Sharks in Galápagos Marine Reserve",
    date: "2013-01-15",
    author: "Carr et al.",
    excerpt: "Researchers documented the illegal catch found aboard a shark fishing vessel seized in the Galápagos Marine Reserve, revealing 379 sharks from seven species, with 89% being juveniles and 64% female.",
    featuredImage: "/images/blacktip-reef-shark-swimming.jpg",
    tags: ["Publication","2013","Conservation"],
    doiUrl: "https://doi.org/10.1016/j.marpol.2012.12.005",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1QZ1drzDH-XFlTMreKXYZnyAiCU3baz8h&usp=drive_fs",
    content: `On July 19, 2011, the Galápagos National Park and Ecuadorian Navy seized the Fer Mary I, a long line fishing vessel from Manta, Ecuador, on the southeast side of Genovesa. The boat carried 30 crew members and was equipped with 1 long line fishing set with 369 hooks, and 6 "lanchas" for patrolling long lines. When researchers examined the vessel on July 23rd, they found 379 shark carcasses that needed to be documented before mandatory disposal under Ecuadorian law.

We wanted to answer a critical question: what exactly are illegal shark fishing operations catching in protected waters? While models estimate that 26-73 million sharks die annually in the global fin trade, we rarely get to examine the actual catch composition of illegal vessels. This was our chance to document the reality of poaching in one of the world's most famous marine reserves.

What we found was devastating. Of the 379 sharks, 303 were pelagic thresher sharks, followed by 42 silky sharks and 24 blue sharks. The demographics told a troubling story: 89% were juveniles that had never reproduced, and 64% were female. The crew had removed the upper tail lobes from thresher sharks, making total length determination impossible. Heads had been removed from 64% of all big-eye threshers (194 individuals), requiring researchers to use dorsal standard length measurements and develop conversion equations to estimate body size.

This single vessel represents a conservation problem. Removing large numbers of juveniles and reproductive females strikes at the heart of shark population recovery. These species are already listed as Near Threatened or Vulnerable by the IUCN, and their slow growth and late maturation make them particularly susceptible to overfishing. Despite the Galápagos Marine Reserve's protected status since 1998 and Ecuador's ban on shark fishing within the reserve since 2003, this data shows that illegal operations continue to target shark populations.

The Fer Mary I was just one of 29 illegal shark fishing operations seized between 2001 and 2007, and three more vessels were caught in 2011 alone. Without dramatic improvements in patrol capacity and penalties, illegal fishing will continue to undermine conservation efforts in even our most protected marine areas.

## Citation

Carr, Lindsey A.; Stier, Adrian C.; Fietz, Katharina; Montero, Ignacio; Gallagher, Austin J.; Bruno, John F. (2013). Illegal shark fishing in the Galápagos Marine Reserve. *Marine Policy*.

[Read the full paper](https://doi.org/10.1016/j.marpol.2012.12.005)`,
  },
  {
    slug: "pecking-order-on-the-reef-competition-among-baby-wrasses-fol",
    title: "Pecking Order on the Reef: Competition Among Baby Wrasses Follows Strict Hierarchy",
    date: "2013-01-15",
    author: "Geange et al.",
    excerpt: "Researchers tested competitive interactions among three juvenile coral reef fish species to understand whether competition follows a predictable hierarchy and how this affects community assembly on reefs.",
    featuredImage: "/images/california-sheephead-kelp-forest.jpeg",
    tags: ["Publication","2013","Coral"],
    doiUrl: "https://doi.org/10.3354/meps10015",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1RDOXUttmzTUmFccxoEYX9KLuxCaRDpe9&usp=drive_fs",
    content: `When multiple species compete for the same resources, ecologists wonder whether competition follows a simple hierarchy, where species A always beats B and B always beats C, or whether more complex intransitive networks exist, where A beats B, B beats C, but C beats A. We tested this question among juvenile coral reef wrasses.

We set up pairwise competition experiments on experimental reef patches in the tropical Pacific. We placed juveniles of three Thalassoma wrasse species in different combinations and monitored survival and growth over time. By comparing outcomes across all possible species pairs, we could determine whether competition followed a linear hierarchy or a more complex network.

Our results revealed a clear competitive hierarchy. One species consistently dominated, reducing survival and growth of both other species in pairwise trials. The middle-ranked species similarly outcompeted the lowest-ranked species. This linear ordering persisted across different experimental conditions.

This matters because hierarchical and intransitive competition have different implications for species coexistence. Intransitive competition, where species form a competitive loop, can promote diversity because no single species can dominate everywhere. But strict hierarchies concentrate competitive advantage in one species, potentially leading to exclusion of weaker competitors unless other factors intervene.

On natural reefs, the competitively inferior species still persist alongside the dominant one. This suggests that factors besides direct competition, like habitat partitioning, predation pressure, or variable recruitment, allow weaker competitors to find niches where they can survive. The competitive hierarchy sets the baseline interaction, but the reef's complexity creates refuges.

Understanding these competitive relationships becomes increasingly important as reef conditions change. If climate change or disturbance shifts the balance among these factors, the underlying competitive hierarchy could become more determinative of community composition. Species that currently persist despite competitive inferiority might lose the buffers that allow their coexistence.

## Citation

Geange, Sw; Stier, Ac; Shima, Js (2013). Competitive hierarchies among three species of juvenile coral reef fishes. *Marine Ecology Progress Series*.

[Read the full paper](https://doi.org/10.3354/meps10015)

*This paper is Open Access.*`,
  },
  {
    slug: "timing-is-everything-when-predator-fish-arrive-at-coral-reef",
    title: "Timing Is Everything: When Predator Fish Arrive at Coral Reefs Reshapes Entire Communities",
    date: "2013-01-15",
    author: "Stier et al.",
    excerpt: "Scientists studying coral reef fish found that when predatory hawkfish arrive to colonize reefs matters just as much as how many show up, dramatically changing which fish species survive and thrive in reef communities.",
    featuredImage: "/images/blue-green-chromis-coral-school.JPG",
    tags: ["Publication","2013","Coral"],
    doiUrl: "https://doi.org/10.1890/11-1983.1",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1Q0xBHh5AGkeZnpXZYfKLqncp3hvR4yod&usp=drive_fs",
    content: `We discovered that timing matters as much as numbers when it comes to how predators shape fish communities. Working in the shallow lagoons of Moorea, French Polynesia, we wanted to understand whether the timing of predator arrival affects reef fish communities as much as predator density itself.

For five months, we surveyed 192 natural patch reefs twice weekly, documenting the presence and absence of hawkfish (Paracirrhites arcatus), sit-and-wait carnivores that perch on coral branches. What we found was striking: these predators were present only 47% of the time on average, staying continuously for an average of 7 days before disappearing again. Some reefs had low-density, stable hawkfish populations; others experienced dramatic changes in predator numbers over time.

We then conducted controlled field experiments using artificial reefs, manipulating hawkfish arrivals to test different scenarios including early arrivals, late arrivals, and varying densities. Our results revealed the powerful effects of timing on reef communities.

Hawkfish presence reduced prey fish abundance by 50% compared to reefs without predators. When we doubled hawkfish density, prey suffered an additional 33% reduction. But the timing effect was nearly as powerful: when hawkfish arrived late in community development, they caused a 34% additional reduction in prey abundance compared to early arrivals. Hawkfish didn't change species richness within patches, but they increased differences between patches by 22% and fundamentally altered which species dominated each reef.

Surprisingly, variability in hawkfish density over time didn't matter—only the timing and total density affected prey communities. We expected temporal fluctuations to create refuges for prey during predator-free periods, but our data showed no such effect.

These findings matter because most predation studies use constant predator densities, missing the dynamic reality of natural systems. Our research suggests that conservation efforts focusing only on predator abundance may miss critical aspects of community dynamics. If the timing of predator colonization shapes entire communities, then understanding migration patterns, seasonal movements, and recruitment timing becomes crucial for predicting reef resilience.

Our study raises important questions about how prey communities recover when predators leave, whether different predator species show similar timing effects, and what drives the natural patterns of hawkfish movement. This work provides a reminder that in ecology, when something happens can matter just as much as what happens.

## Citation

Stier, Adrian C.; Geange, Shane W.; Hanson, Kate M.; Bolker, Benjamin M. (2013). Predator density and timing of arrival affect reef fish community assembly. *Ecology*.

[Read the full paper](https://doi.org/10.1890/11-1983.1)`,
  },
  {
    slug: "mystery-disease-kills-hundreds-of-fish-after-rare-ocean-baby",
    title: "Mystery Disease Kills Hundreds of Fish After Rare Ocean 'Baby Boom' in French Polynesia",
    date: "2013-01-15",
    author: "Stier et al.",
    excerpt: "Marine biologists documented two rare mass die-off events of surgeonfish in French Polynesia following exceptional recruitment pulses, where hundreds of newly settled fish developed white lesions and died, suggesting disease rather than predation as the cause of mortality.",
    featuredImage: "/images/coral-reef-panorama-anthias-fish.jpeg",
    tags: ["Publication","2013","Coral"],
    doiUrl: "https://doi.org/10.2984/67.4.4",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1Ps810gnS2zkD8IHYS2n7WfF584rGhAjf&usp=drive_fs",
    content: `In February 2006, my colleagues Joshua Idjadi, Shane Geange, Jada-Simone White, and I witnessed something extraordinary in the lagoons of Moorea: striped bristletooth surgeonfish had arrived as juveniles in what we call an episodic settlement event. But within days, hundreds of these fish were lying dead on the sandy bottom, their bodies marked by distinctive white lesions.

We had been tracking fish populations around this French Polynesian island for years, conducting biannual surveys at 26 sites using visual transects to estimate fish abundance and size. Our question was simple: what happens to reef fish communities during these rare recruitment bonanzas? We knew that high mortality typically follows such events, but the conventional wisdom blamed predation. What we saw in 2006, and again in 2009, made us question that assumption.

Our data showed recruit densities were more than six times higher during these February events compared to our typical counts of about 3 recruits per 50 square meters. But the aftermath was unlike anything described in the literature. Instead of finding evidence of predation, we documented fish lying dead or dying with large white lesions, particularly near their tails, along with decreased swimming ability and tattered fins. Most telling was what we didn't see: predators weren't immediately consuming the dead and dying fish, suggesting they may have been satiated or avoiding diseased prey.

What surprised us most was the apparent selectivity of whatever was killing these fish. Only the surgeonfish showed symptoms, despite the lagoon being full of other species that should have been equally vulnerable to predators or environmental stressors. The mechanism remained completely unclear to us. We noticed that both die-off events coincided with blooms of Lyngbya majuscula, a toxic cyanobacteria known to cause surgeonfish toxicity in Hawaii, but we had no way to test whether this was the culprit or mere coincidence.

Our observations matter because they challenge a fundamental assumption about reef fish population dynamics. If disease outbreaks, rather than predation, drive mortality during recruitment pulses, it could completely change how we think about population bottlenecks and community structure on coral reefs. The timing wasn't random—these events happened when fish densities were at their highest, exactly when you'd expect disease transmission to be most efficient.

The capricious nature of these events left us with more questions than answers. We couldn't predict when they would occur, couldn't sample tissues for pathogen analysis, and couldn't rule out toxic effects from the cyanobacteria blooms. We need controlled studies to determine whether pathogens actually cause these die-offs, whether certain environmental conditions trigger outbreaks, and how frequently disease shapes reef fish populations in ways we've simply never recognized. Until then, every assumption about what controls fish communities remains open to question.

## Citation

Stier, Adrian C.; Idjadi, Joshua A.; Geange, Shane W.; White, Jada-Simone S. (2013). High Mortality in a Surgeonfish Following an Exceptional Settlement Event. *Pacific Science*.

[Read the full paper](https://doi.org/10.2984/67.4.4)`,
  },
  {
    slug: "decades-of-predator-studies-may-be-wrong-due-to-flawed-mathe",
    title: "Decades of Predator Studies May Be Wrong Due to Flawed Mathematical Assumptions",
    date: "2012-01-15",
    author: "McCoy et al.",
    excerpt: "Scientists discovered that common methods used to study how multiple predators affect prey survival are systematically biased, leading to overestimation of predator interactions in ecological studies. The bias occurs because current methods assume predators maintain constant feeding rates, but in reality feeding rates change as prey become depleted during experiments.",
    featuredImage: "/images/manta-ray-silhouette-underwater.JPG",
    tags: ["Publication","2012","Predator-Prey"],
    doiUrl: "https://doi.org/10.1111/ele.12005",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1RTBjCF53CsqFf6GgmGXuP1kh39Zc368v&usp=drive_fs",
    content: `Understanding how multiple predators affect prey survival has been a central question in ecology, with researchers developing sophisticated methods to detect 'emergent effects' - situations where predators hunting together kill more or fewer prey than predicted from their individual effects. However, our research reveals that the standard mathematical approach used by ecologists contains systematic biases that may have led to incorrect conclusions for decades.

We examined the Multiplicative Risk Model, the consensus approach that emerged from years of scientific debate for predicting what happens when multiple predators hunt the same prey. This model accounts for the fact that prey cannot be eaten twice, but we discovered it makes a critical assumption that predators maintain constant feeding rates throughout experiments.

Using mathematical simulations of predation experiments, we compared predictions from the standard model against more realistic models that account for how predator feeding rates actually change over time. We found that when prey are depleted during experiments - which happens in most studies - the standard model produces systematic bias.

Our examination of 100 multiple predator studies from the literature revealed that prey were depleted by 70% on average over the course of experiments. This depletion violates a key assumption of the Multiplicative Risk Model, which assumes constant per capita mortality rates. In reality, most predators exhibit Type II functional responses, meaning their feeding rates change as prey become scarce.

The bias manifests differently depending on experimental design. Studies using additive designs (where predator densities are combined) consistently overestimated 'risk enhancement,' while substitutive designs (where total predator density remains constant) usually overestimated 'risk reduction,' even when predators were actually having completely independent effects.

These findings have significant implications for understanding ecosystem function. Predator-prey interactions comprise the foundation of food web dynamics, and if researchers have been systematically overestimating how often predators interact, then current understanding of ecosystem function may be flawed. This affects conservation efforts, ecosystem management, and basic understanding of how marine and terrestrial food webs operate.

Our research suggests that meta-analyses and syntheses of multiple predator effects may need to be reconsidered in light of these systematic biases. Moving forward, the field needs better methods that account for prey depletion and nonlinear functional responses, recognizing that the dynamic nature of biological processes can significantly affect study outcomes.

## Citation

McCoy, Michael W.; Stier, Adrian C.; Osenberg, Craig W. (2012). Emergent effects of multiple predators on prey survival: the importance of depletion and the functional response. *Ecology Letters*.

[Read the full paper](https://doi.org/10.1111/ele.12005)`,
  },
  {
    slug: "tiny-coral-bodyguards-team-up-for-super-powered-defense-agai",
    title: "Tiny Coral Bodyguards Team Up for Super-Powered Defense Against Starfish Attacks",
    date: "2012-01-15",
    author: "McKeon et al.",
    excerpt: "Scientists discovered that two species of small crustaceans living on coral reefs work together in a synergistic partnership to defend their coral homes from predatory sea stars, with their combined efforts being more effective than the sum of their individual defensive abilities.",
    featuredImage: "/images/Arete indicus - ML.jpg",
    tags: ["Publication","2012","Mutualism","Coral"],
    doiUrl: "https://doi.org/10.1007/s00442-012-2275-2",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1RcKwNv3l-kYqMJlthVveQEl609tZxt--&usp=drive_fs",
    content: `We investigated whether multiple species of mutualist crustaceans that live on coral reefs provide independent benefits to their coral hosts, or whether their combined effects create something greater than the sum of their parts. Most mutualism research focuses on simple pairwise relationships, but coral reefs are complex communities where multiple defender species often coexist on single coral colonies.

We collected Pocillopora coral colonies from shallow waters near Moorea and carefully manipulated which crustaceans were present before exposing them to Culcita sea stars in controlled feeding trials. Our results revealed a clear pattern of synergistic defense.

When either species defended alone, they provided modest protection—the presence of mutualists reduced predation frequency by 15% and the volume of coral tissue consumed by 45%. But when both species were present together, they reduced coral tissue loss by a dramatic 73%. This wasn't just additive—if the two species had worked independently, we would have expected only a 38% reduction in tissue loss based on their individual performances. The 73% reduction was significantly greater, revealing what we termed an emergent 'multiple defender effect.'

Our research showed that the frequency of attacks didn't differ significantly from what would be expected if the defenders worked independently, but somehow their combined presence dramatically reduced the amount of coral tissue actually consumed when attacks did occur.

This discovery has profound implications for coral reef conservation. If the defensive benefits of mutualist communities emerge from synergistic interactions rather than simple addition of individual effects, then protecting coral reefs means protecting entire networks of mutualist species. Losing even one partner in these multi-species mutualisms could cause disproportionate declines in coral defense, especially as coral reefs face increasing pressure from climate change, overfishing, and other human impacts.

Our work opens up new questions about how complex mutualist communities function. In initial studies conducted in 2006, we observed up to five species of Trapezia along with Alpheus lottini occupying single Pocillopora coral colonies. Understanding these multi-species partnerships may be key to predicting which coral communities will persist in our changing oceans.

## Citation

McKeon, C. Seabird; Stier, Adrian C.; McIlroy, Shelby E.; Bolker, Benjamin M. (2012). Multiple defender effects: synergistic coral defense by mutualist crustaceans. *Oecologia*.

[Read the full paper](https://doi.org/10.1007/s00442-012-2275-2)`,
  },
  {
    slug: "axolotls-lose-their-superpower-when-they-transform-into-land",
    title: "Axolotls Lose Their Superpower When They Transform Into Land-Dwelling Adults",
    date: "2012-01-15",
    author: "Seifert et al.",
    excerpt: "This comprehensive review examines why some animals can regenerate lost limbs and appendages while others cannot, exploring how fundamental traits like body size, age, metabolic rate, and life history influence regenerative capacity across the animal kingdom.",
    featuredImage: "/images/axolotl-salamander-pink-portrait.jpg",
    tags: ["Publication","2012"],
    doiUrl: "https://doi.org/10.1111/j.1469-185X.2011.00199.x",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1Rlmh8Uk1ENpPHLb-rOqQ2BOlAlhoAfqk&usp=drive_fs",
    content: `One of the most compelling questions in evolutionary biology is why some animals can regenerate injured structures while others cannot. Salamanders can regrow entire limbs, sea stars can regenerate arms, and some fish can replace fins, yet mammals and birds have largely lost this ability. In a comprehensive review, we examined the fundamental traits that influence this remarkable capacity.

We synthesized decades of research across the animal kingdom, looking for patterns that might explain the patchy distribution of regenerative ability. What emerged was a complex picture where regeneration isn't simply present or absent, but varies in degree and changes throughout an animal's life. Within single species, regenerative capacity often declines with age and body size, or can be lost entirely during major life transitions.

One striking example comes from axolotls, the famous regenerating salamanders. These animals can regrow limbs, tails, and even parts of their hearts and brains. But when axolotls undergo metamorphosis and transform into their terrestrial adult form, they lose much of this regenerative capacity. This observation suggests that the traits enabling regeneration may be incompatible with other physiological demands of adult life.

We found that smaller body size and higher metabolic rates often correlate with greater regenerative capacity. This relationship hints at possible trade-offs between regeneration and other energetically costly processes like growth and reproduction. Animals investing heavily in rapid reproduction, for instance, may have fewer resources available for maintaining regenerative machinery.

These patterns raise provocative questions about human regeneration. Humans retain some regenerative capacity, being able to heal wounds and regenerate liver tissue, but cannot regrow limbs. Understanding what molecular and cellular mechanisms have been lost or suppressed could potentially inform medical approaches to enhance tissue repair.

Our review also highlighted how much remains unknown. Why did some lineages lose regeneration while closely related species retained it? What specific genes and developmental pathways control this ability? As genetic tools become more powerful, researchers may be able to answer these questions and perhaps one day unlock latent regenerative potential in species, including humans, that have lost this remarkable ability.

## Citation

Seifert, Ashley W.; Monaghan, James R.; Smith, Matthew D.; Pasch, Bret; Stier, Adrian C.; Michonneau, François; Maden, Malcolm (2012). The influence of fundamental traits on mechanisms controlling appendage regeneration. *Biological Reviews*.

[Read the full paper](https://doi.org/10.1111/j.1469-185X.2011.00199.x)`,
  },
  {
    slug: "coral-housekeepers-multiple-species-of-cleaners-keep-reefs-s",
    title: "Coral Housekeepers: Multiple Species of Cleaners Keep Reefs Sediment-Free Better Than Any Single Species",
    date: "2012-01-15",
    author: "Stier et al.",
    excerpt: "Scientists studied how multiple species of crabs and shrimp living on coral reefs work together to keep their coral homes clean by removing harmful sediment, finding that more species of cleaners leads to cleaner corals.",
    featuredImage: "/images/Hawkf_Tetralia_rubridactyla.jpg",
    tags: ["Publication","2012","Coral","Mutualism"],
    doiUrl: "https://doi.org/10.1371/journal.pone.0032079",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1PB7HJWHODJyEUtImtqQ47-ev10MEM6EG&usp=drive_fs",
    content: `In French Polynesia, we discovered that corals with four cleaning symbionts removed 48% of sediment compared to just 10% for corals without any cleaners. We examined whether multiple species of coral cleaners worked together synergistically, interfered with each other, or simply provided independent benefits.

Over three consecutive days, we surveyed Pocillopora coral colonies, documenting every crab and shrimp we found. We then designed controlled experiments using outdoor seawater tanks, adding different combinations of the two most common species - Trapezia serenei crabs and Alpheus lottini shrimp - to corals before adding precisely measured amounts of sediment at dusk.

Our results showed clear benefits of multiple cleaner species. Alone, corals removed only 10% of the sediment. With two symbionts, removal jumped to 30%. With four symbionts, it reached 48%. Each additional cleaner contributed the same per-capita benefit regardless of how many others were present - they worked independently, not synergistically. In our field surveys, Trapezia crabs and Alpheus shrimp co-occurred more often than expected by chance, and all common symbionts occurred only as pairs, never at higher abundances.

The pairing pattern we observed in nature was notable. Despite the clear benefits of having more cleaners, we never found more than two individuals of any species on a single coral. This suggests that intraspecific competition - likely related to mating systems - prevents higher densities.

These findings matter because sediment is a major threat to coral reefs worldwide. Natural disturbances like cyclones and human activities like coastal development increase sediment loads, which decrease coral growth and increase mortality. While corals can remove some sediment through mucus sloughing and cilia movement, our work shows that symbionts play a critical role in protecting corals from sedimentation damage. The key insight is that coral health depends not just on having cleaners, but on maintaining diverse communities of different cleaning species.

As coral reefs face increasing threats, understanding these partnerships becomes important for predicting which reefs might survive and which conservation strategies might help them thrive.

## Citation

Stier, Adrian C.; Gil, Michael A.; McKeon, C. Seabird; Lemer, Sarah; Leray, Matthieu; Mills, Suzanne C.; Osenberg, Craig W. (2012). Housekeeping Mutualisms: Do More Symbionts Facilitate Host Performance?. *PLoS ONE*.

[Read the full paper](https://doi.org/10.1371/journal.pone.0032079)

*This paper is Open Access.*`,
  },
  {
    slug: "scientists-reveal-massive-economic-value-hidden-in-disappear",
    title: "Scientists Reveal Massive Economic Value Hidden in Disappearing Coastlines",
    date: "2011-01-15",
    author: "Barbier et al.",
    excerpt: "Researchers conducted a comprehensive review to understand what estuarine and coastal ecosystems are worth to humanity, finding that while we have good economic valuations for some services like those provided by coral reefs and salt marshes, many critical benefits from seagrass beds and sand dunes remain unvalued despite massive global losses of these habitats.",
    featuredImage: "/images/tropical-beach-palm-trees-waves.JPG",
    tags: ["Publication","2011","Conservation"],
    doiUrl: "https://doi.org/10.1890/10-1510.1",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1RhJxuIYkZ6TVuzdXTW-9jb0ld9Ax8NCt&usp=drive_fs",
    content: `When we began tallying up what the world's coastlines are actually worth, we revealed something significant: we're losing natural wealth at a staggering pace, and we don't even know how much we're losing.

We wanted to answer a deceptively simple question: what are estuarine and coastal ecosystems actually worth to humanity? These are the marshes, mangroves, coral reefs, seagrass beds, and beaches that rim our continents, and they're disappearing faster than almost any other habitat on Earth. To find out what we're losing, we combed through decades of research to catalog every service these ecosystems provide and put dollar values on them wherever possible.

The numbers were substantial, but not in the way one might expect. Yes, coastal ecosystems provide enormous economic value - but what our research showed was how much we've already lost. Globally, 50% of salt marshes, 35% of mangroves, 30% of coral reefs, and 29% of seagrasses are either lost or degraded. This destruction has caused a 33% decline in viable fisheries, a 69% decline in nursery habitats like oyster reefs and wetlands, and a 63% decline in the filtering and detoxification services that clean our water. We're not just losing scenery - we're losing the infrastructure that supports coastal economies and protects coastal communities.

Our research revealed significant gaps in our economic knowledge. We've gotten good at valuing some services - we know coral reefs generate tourism revenue and salt marshes protect against storms. But vast categories of benefits remain completely unvalued. We have no reliable economic estimates for how seagrass beds and sand dunes protect our coasts, or how mangroves control pollution. Even for the ecosystems we understand better, critical services like nutrient transfer between coral reefs and other habitats have never been properly valued.

This matters because these ecosystems don't work in isolation - they're connected across the seascape in ways that multiply their benefits. A mangrove forest doesn't just provide nursery habitat for fish; it also filters pollution that would otherwise damage nearby coral reefs, which in turn provide the fish that support coastal fisheries. When we lose one piece, we lose more than just that piece - we lose the synergistic effects that make the whole system more valuable than the sum of its parts. This connectivity means that managing individual habitats in isolation is insufficient.

The path forward requires what we call a 'seascape approach' - managing entire coastal systems rather than individual habitats. But first, we need to fill the enormous gaps in our knowledge about what these systems are worth. Until we can put proper valuations on coastal protection, water filtration, and habitat connectivity, we'll keep making decisions based on incomplete information. The question isn't whether we can afford to protect these ecosystems - it's whether we can afford not to understand what we're losing when we don't.

## Citation

Barbier, Edward B.; Hacker, Sally D.; Kennedy, Chris; Koch, Evamaria W.; Stier, Adrian C.; Silliman, Brian R. (2011). The value of estuarine and coastal ecosystem services. *Ecological Monographs*.

[Read the full paper](https://doi.org/10.1890/10-1510.1)

*This paper is Open Access.*`,
  },
  {
    slug: "coral-safety-in-numbers-reef-builders-grow-faster-in-dense-n",
    title: "Coral Safety in Numbers: Reef-builders Grow Faster in Dense Neighborhoods Despite Attracting More Predators",
    date: "2011-01-15",
    author: "Shantz et al.",
    excerpt: "Scientists tested how coral colony density and predators affect coral growth by creating experimental reefs in a lagoon and found that both higher coral density and predator exclusion significantly boosted growth rates.",
    featuredImage: "/images/butterflyfish-eating-coral.jpeg",
    tags: ["Publication","2011","Coral"],
    doiUrl: "https://doi.org/10.1007/s00338-010-0694-2",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1RsuvlmfKlkg9vzqT1vYiyoWjTwYph6VE&usp=drive_fs",
    content: `A field experiment in French Polynesia revealed surprising results about how coral colonies benefit from living in groups. We built 32 concrete experimental reefs in an open sand plain, far from natural reefs to avoid confounding factors. On each reef, we transplanted small Porites colonies - some reefs received just two colonies, others received eight. Half of the experimental reefs were caged to keep predators out, half were left open with partial cages that allowed fish access.

Our results were striking. Predator exclusion increased coral growth by 20%, which aligned with expectations. But the bigger surprise was density: corals in high-density treatments grew 30% faster than those in low-density treatments. We never observed actual bite marks on experimental corals, suggesting the predation effects came from the metabolic cost of tissue repair rather than obvious skeletal damage. Meanwhile, fish surveys confirmed that high-density reefs attracted significantly more corallivorous fish.

What proved most interesting was that these two effects - density and predation - operated completely independently. If predator dilution explained the density benefit, the effect should have disappeared in caged treatments. It didn't. The mechanism behind the density benefit remains unclear. We suspect it involves changes in water flow around coral colonies, which could boost photosynthesis or nutrient uptake, or perhaps the increased abundance of beneficial organisms that associate with coral colonies.

This research has implications for coral restoration strategies. If corals benefit from clustering, then efforts to rebuild damaged reefs should consider density as a factor. It also suggests that as reefs decline and coral cover drops, the remaining colonies might face additional stress from the loss of density-dependent benefits.

Fundamental questions remain about what drives these density benefits and how dense colonies need to be to gain advantages. In an era of reef decline, understanding whether the loss of coral neighborhoods creates cascading effects becomes increasingly important for conservation efforts.

## Citation

Shantz, A. A.; Stier, A. C.; Idjadi, J. A. (2011). Coral density and predation affect growth of a reef-building coral. *Coral Reefs*.

[Read the full paper](https://doi.org/10.1007/s00338-010-0694-2)`,
  },
  {
    slug: "late-to-the-party-coral-reef-fish-face-near-certain-death-wh",
    title: "Late to the Party: Coral Reef Fish Face Near-Certain Death When They Arrive Just Days Behind Competitors",
    date: "2010-01-15",
    author: "Geange et al.",
    excerpt: "Scientists studied how the timing of when fish arrive at a reef and the complexity of their habitat affects competition between young coral reef fish, finding that early arrival gives fish a major survival advantage but only in simple habitats.",
    featuredImage: "/images/sheephead.jpeg",
    tags: ["Publication","2010","Coral"],
    doiUrl: "https://doi.org/10.1007/s00442-009-1554-z",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1QW57TYlz9HwPIvqFpjygzFea3N-SlqsD&usp=drive_fs",
    content: `We studied young wrasse settling onto coral reefs in the lagoons of Moorea, witnessing something that would fundamentally change how we think about competition in marine ecosystems. Those fish arriving just five days after their competitors faced survival odds nearly three times worse than those arriving simultaneously—a 2.89-fold difference that meant the difference between life and death.

We wanted to understand something that had puzzled marine biologists for years: why does timing matter so much in competitive interactions, and can complex habitats level the playing field? To find out, we constructed experimental patch reefs in Moorea's northern lagoon and manipulated two key variables—when young five-lined wrasse arrived (simultaneously or with a 5-day delay) and the structural complexity of their new homes. Then we observed what happened.

Our results were stark. Simultaneous arrival with competitors resulted in that dramatic 2.89-fold increase in survival compared to arriving 5 days later. But habitat complexity told a more nuanced story. When fish arrived simultaneously or early, increasing habitat complexity boosted survival by 1.55-fold. However, for those unlucky late arrivals, habitat complexity provided no survival benefit whatsoever. Through behavioral observations, we discovered that survivorship was negatively correlated with aggression, and aggression by prior residents toward newcomers was significantly greater when focal individuals arrived 5 days later than when they arrived simultaneously.

What surprised us most was that increasing habitat complexity didn't reduce aggression at all. We had expected complex habitats to provide refuges that would dampen competitive interactions, but the data told a different story. It seems that when competitors arrive simultaneously, competitive interactions are weak and habitat complexity helps by disrupting predation. But when competitors arrive at different times, aggression intensifies and late arrivals get excluded from habitat resources entirely, making complexity irrelevant.

These findings matter because they reveal that competition isn't just about who's stronger or bigger—it's about when you show up to the party. As climate change shifts breeding seasons and larval transport patterns across the globe, small changes in settlement timing could have cascading effects on reef fish communities. A few days' difference in arrival time could determine which individuals survive to reproduce and which lineages persist.

But fundamental questions remain about the mechanisms at play. We still don't fully understand why habitat complexity fails to buffer late arrivals from competitive exclusion, or exactly how early residents maintain their dominance. Our study shows that the strength of competition is context-dependent, but the competitive mechanisms that determine these outcomes require further investigation.

## Citation

Geange, Shane Wallace; Stier, Adrian C. (2010). Priority effects and habitat complexity affect the strength of competition. *Oecologia*.

[Read the full paper](https://doi.org/10.1007/s00442-009-1554-z)`,
  },
  {
    slug: "tiny-predators-make-toxic-algal-blooms-worse-by-eating-the-c",
    title: "Tiny Predators Make Toxic Algal Blooms Worse by Eating the Creatures That Fight Them",
    date: "2010-01-15",
    author: "Geange et al.",
    excerpt: "Researchers discovered that tiny sea slugs called nudibranchs can indirectly increase toxic cyanobacterial blooms on coral reefs by preying on sea hares - the herbivores that would otherwise graze down the harmful bacteria.",
    featuredImage: "/images/tropical-island-aerial-view-lagoon-reef.jpeg",
    tags: ["Publication","2010","Coral","Predator-Prey"],
    doiUrl: "https://doi.org/10.1007/s00338-010-0606-5",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1RVz1OnswyuVKM-rsLjmkhLsl34HKjngU&usp=drive_fs",
    content: `We wanted to understand something that had puzzled us: why do toxic cyanobacterial blooms seem to persist even when there are herbivores around that should be eating them?

We tested whether predation might be disrupting the natural control of cyanobacterial blooms on coral reefs. We collected nudibranchs, sea hares, and mats of the toxic cyanobacterium Lyngbya majuscula from the field and designed a series of feeding experiments using plastic containers placed in flow-through seawater tanks, testing how these three species interact in what appeared to be a simple food chain: nudibranch eats sea hare, sea hare eats cyanobacteria.

Our results revealed a stark size bias in predation. Small sea hares were consumed 22 times more often than large ones - a dramatic difference that suggests young sea hares face much higher mortality risk. When we tested the full three-species system, we found that nudibranch predation significantly reduced sea hare numbers. This predation pressure had a cascading effect: cyanobacterial biomass was 1.5 times greater when nudibranchs were present compared to when they were absent.

The nudibranch's feeding rate followed a classic Type II functional response, with an attack rate of 12.21 per day and a handling time of 0.285 days per sea hare. We observed that nudibranchs are suction feeders, consuming sea hares one individual at a time, while sea hares would attempt to evade predators by excreting purple ink and undulating their bodies.

These findings matter because cyanobacterial blooms are becoming more frequent and severe on coral reefs due to warming waters and nutrient pollution. The blooms smother corals, kill fish, and cause skin and respiratory irritation in humans. If predation pressure is reducing the effectiveness of natural grazers, it suggests that protecting herbivore populations could be crucial for managing these harmful blooms.

Our research provides clear evidence of trophic cascade effects in laboratory conditions, but more work is needed to understand how these dynamics play out in complex reef ecosystems where many more species and environmental factors are involved.

## Citation

Geange, S. W.; Stier, A. C. (2010). Charismatic microfauna alter cyanobacterial production through a trophic cascade. *Coral Reefs*.

[Read the full paper](https://doi.org/10.1007/s00338-010-0606-5)`,
  },
  {
    slug: "reef-predators-act-like-lawnmowers-cutting-down-young-fish-i",
    title: "Reef Predators Act Like Lawnmowers, Cutting Down Young Fish Indiscriminately",
    date: "2010-01-15",
    author: "Heinlein et al.",
    excerpt: "Researchers in French Polynesia found that predators dramatically reduce both the number and variety of young coral reef fish by eating them indiscriminately soon after they settle on reefs, rather than targeting specific species.",
    featuredImage: "/images/bleach-coral.jpeg",
    tags: ["Publication","2010","Predator-Prey","Coral"],
    doiUrl: "https://doi.org/10.1007/s00338-010-0592-7",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1QqAPbD0DEe_dRgw-p3oLSCMnnZsLWa1B&usp=drive_fs",
    content: `In Moorea, French Polynesia, we examined how predators affect young coral reef fish communities during recruitment. We constructed 21 identical patch reefs from live Pocillopora coral heads, each about 30 centimeters in diameter, and placed them on a sandy bottom in Cook's Bay. The reefs were randomly assigned to three treatments: seven received full cages to exclude predators, seven got partial cages as controls, and seven remained completely exposed to predators.

After 54 days of monitoring during the 2008 austral summer, our results showed dramatic predator effects. A total of 172 young fish from 20 species and nine families were observed across all treatments. Predators reduced recruit abundance by 74% and species richness by 42% compared to protected reefs. Every fish family experienced losses when predators were present, though the magnitude varied. Acanthuridae, Lethrinidae, and Pomacentridae showed statistically significant reductions, with families like Balistidae, Lethrinidae, and Mullidae experiencing the highest proportional losses (94-100%), while Gobiidae and Labridae had smaller reductions of approximately 30%.

Our key finding was that predators operated non-selectively. Rarefaction analysis revealed that reduced species diversity occurred simply because fewer individual fish meant fewer species could persist on each reef, rather than predators targeting specific species. This indiscriminate predation pattern suggests that predators function more like a general mortality factor than as selective sculptors of community structure.

These results indicate that predation can alter diversity of reef fish communities by reducing abundance across species soon after settlement, thereby reducing the number of species present on reefs. Our study demonstrates the important role of both resident and transient predators in shaping coral reef fish community structure during the critical early recruitment period.

## Citation

Heinlein, J. M.; Stier, A. C.; Steele, M. A. (2010). Predators reduce abundance and species richness of coral reef fish recruits via non-selective predation. *Coral Reefs*.

[Read the full paper](https://doi.org/10.1007/s00338-010-0592-7)`,
  },
  {
    slug: "tiny-snails-are-secretly-devastating-coral-reefs-across-the-",
    title: "Tiny Snails Are Secretly Devastating Coral Reefs Across the Pacific",
    date: "2010-01-15",
    author: "Shima et al.",
    excerpt: "Researchers discovered that a little-studied snail called Dendropoma maximum severely damages reef-building corals, reducing their growth by up to 81% and survival by up to 52%. This overlooked species could be reshaping coral reef communities across the Indo-Pacific.",
    featuredImage: "/images/deadcoral.jpeg",
    tags: ["Publication","2010","Coral"],
    doiUrl: "https://doi.org/10.1098/rsbl.2010.0291",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1S-hafYLKE6Kd2mLSBTfeEjljq-4H_AEL&usp=drive_fs",
    content: `While studying coral reefs in Moorea's lagoons, we documented a pattern: some coral colonies appeared healthy and three-dimensional, while others were stunted and flattened. This morphological difference correlated with the presence of small, tube-building snails called vermetids that most reef scientists rarely study.

We investigated whether these gastropods, specifically Dendropoma maximum, harm reef-building corals. The snails are sessile filter-feeders that cast out mucus nets to capture food, and those nets often contact neighboring corals. We surveyed 90 patch reefs to document patterns, then conducted controlled field experiments by transplanting coral fragments to small patch reefs, randomly removing vermetids from half the reefs while leaving them at natural densities on the others.

Vermetids reduced skeletal growth rates of Pocillopora by 68-81%, P. rus by 62%, P. lobata by 40-62%, and Montipora by 24%. They also reduced coral survival by up to 52% for three of the four species tested. Averaged across species, vermetids reduced coral skeletal growth by 56% and colony survival by 40%. Field surveys supported our experimental results: vermetid presence was strongly associated with flattened coral morphology, and higher vermetid densities correlated with more dead coral substrate.

The effects varied considerably among coral species. Montipora maintained 100% survival even with vermetids present, while Pocillopora suffered the most severe growth reductions. This variation suggests that vermetids might reshape reef communities by affecting coral species differently.

These findings are significant because coral reefs face mounting pressure from climate change, pollution, and other human impacts. Our discovery that an abundant but overlooked species causes substantial additional damage highlights the potential importance of poorly studied species to coral dynamics. The differential effects on coral species suggest vermetids could alter coral community composition, potentially affecting reef diversity and resilience.

## Citation

Shima, Jeffrey S.; Osenberg, Craig W.; Stier, Adrian C. (2010). The vermetid gastropod <i>Dendropoma maximum</i> reduces coral growth and survival. *Biology Letters*.

[Read the full paper](https://doi.org/10.1098/rsbl.2010.0291)

*This paper is Open Access.*`,
  },
  {
    slug: "baby-fish-choose-lonelier-reefs-over-crowded-neighborhoods-c",
    title: "Baby Fish Choose Lonelier Reefs Over Crowded Neighborhoods, Challenging 'Build It and They Will Come' Restoration",
    date: "2010-01-15",
    author: "Stier et al.",
    excerpt: "Scientists tested whether adding new coral reef habitat attracts more fish larvae overall (like a 'field of dreams') or simply redirects them away from existing sites. They found evidence for both effects occurring simultaneously.",
    featuredImage: "/images/research-team-group-photo-beach.jpeg",
    tags: ["Publication","2010"],
    doiUrl: "https://doi.org/10.1890/09-1993.1",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1OoorYJc7-DFjnvg8bykoQpGPsfqLWwUB&usp=drive_fs",
    content: `While studying coral reef fish settlement in French Polynesia, we discovered that baby fish larvae consistently choose isolated coral patches over ones surrounded by neighbors, even when the neighborhoods offer six times more habitat. This finding challenges conventional wisdom about habitat restoration.

We wanted to test a fundamental question in marine ecology: when you add new habitat, do you actually increase the total number of colonists, or do you simply shuffle them around? The 'Field of Dreams' hypothesis suggests that if you build habitat, marine life will come in proportion to what you've built. But we suspected something more complex was happening - that new habitat might redirect larvae away from existing sites, creating what we called 'settlement shadows.'

To test this, we constructed 168 identical artificial reefs using cinder blocks topped with living coral colonies, arranging them in carefully designed patterns across 12 sites in Moorea's lagoon. Our results were striking. Focal reefs without neighbors received two to four times more settlers than identical reefs surrounded by additional habitat. Yet when looking at the entire experimental array, total colonization increased only 1.3-fold despite a sixfold increase in reef area.

We monitored four fish species that comprised 88% of all settlers - two damselfish species, a wrasse, and a goby - and all showed the same pattern. The larvae were clearly being redirected, choosing to settle on lonelier reefs rather than crowded neighborhoods.

These findings challenge a cornerstone assumption of habitat restoration. Our mathematical modeling suggested that adding habitat increases fish populations primarily by reducing competition and density-dependent mortality at existing sites, rather than by attracting brand new colonists. This means restoration projects might be helping marine life in ways we haven't fully appreciated, but also that the benefits might be more limited than hoped. The implications stretch from coral reef restoration to marine protected area design.

## Citation

Stier, Adrian C.; Osenberg, Craig W. (2010). Propagule redirection: Habitat availability reduces colonization and increases recruitment in reef fishes. *Ecology*.

[Read the full paper](https://doi.org/10.1890/09-1993.1)`,
  },
  {
    slug: "tiny-bodyguard-crabs-save-coral-reefs-from-slimy-attackers",
    title: "Tiny Bodyguard Crabs Save Coral Reefs from Slimy Attackers",
    date: "2010-01-15",
    author: "Stier et al.",
    excerpt: "Researchers found that small crabs living on coral reefs act as bodyguards, protecting their coral hosts from harmful mucus-producing snails that can reduce coral growth by 50%. The crabs completely eliminated the negative effects of the snails on coral growth.",
    featuredImage: "/images/coral-guard-crab-red-spotted-macro.jpeg",
    tags: ["Publication","2010","Symbiosis","Coral"],
    doiUrl: "https://doi.org/10.1007/s00338-010-0663-9",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1QOeao-MJL0JXc4FoO4v2nsrigxDOKU50&usp=drive_fs",
    content: `When researchers transplanted coral colonies onto patch reefs in Moorea's lagoon, they discovered something remarkable: tiny guard crabs were completely protecting their coral hosts from a slimy threat. In their 40-day experiment, corals with their crab bodyguards thrived even when surrounded by mucus-producing vermetid snails, while those without crabs suffered dramatic growth reductions.

The researchers wanted to know whether guard crabs could protect corals from more than just crown-of-thorns seastar attacks and sedimentation—specifically, whether they could defend against vermetid snails. These sessile snails extrude mucous nets for feeding, and previous work had shown they can devastate coral growth. The team collected 40 coral colonies, removed crabs from half of them, and placed pairs of corals (one with crabs, one without) on 20 patch reefs. On half the reefs, they removed all vermetids; on the others, they left them alone.

The results were striking. Without guard crabs, vermetids reduced coral growth rates by 50%—similar to what had been observed in earlier studies. But when guard crabs were present, vermetids had no demonstrable effect on coral growth. The crabs completely ameliorated the deleterious effects. In fact, guard crabs increased coral growth by 100% when vermetids were present, while having no effect when vermetids were absent.

The crabs completely neutralized the threat. The researchers don't think the crabs were attacking the snails directly—their surveys found equivalent vermetid densities at the start and end of the experiment, and they never observed crabs leaving their coral colonies to interact with snails. The mechanism remains unclear, though they speculate the crabs might consume vermetid mucus, dislodge it during their movements, or actively remove it through housekeeping behaviors.

This matters because Pocillopora provides critical habitat throughout the eastern Pacific, and vermetid populations may be increasing in Moorea. Previous projections of coral dynamics didn't account for guard crabs because those studies used small coral fragments that couldn't support adult crabs. If crabs can effectively protect corals from vermetids, they may preserve not just the corals themselves but entire communities of fish and invertebrates that depend on them.

The interactions are complex. Recent work suggests some guard crab species actually increase fish mortality through competition, and those fish normally boost coral growth through oxygenation or nitrogen excretion. Understanding these multispecies interactions will be important for predicting how reefs respond to environmental change.

## Citation

Stier, A. C.; McKeon, C. S.; Osenberg, C. W.; Shima, J. S. (2010). Guard crabs alleviate deleterious effects of vermetid snails on a branching coral. *Coral Reefs*.

[Read the full paper](https://doi.org/10.1007/s00338-010-0663-9)`,
  },
  {
    slug: "why-fish-crowding-studies-get-such-different-results-scale-a",
    title: "Why Fish Crowding Studies Get Such Different Results: Scale and Habitat Are Key",
    date: "2010-01-15",
    author: "White et al.",
    excerpt: "This paper synthesizes mechanisms that create density-dependent mortality in reef fishes, examining how behavior, habitat structure, and the scale of observation all influence whether and how strongly crowding affects survival.",
    featuredImage: "/images/damselfish-school-coral-reef.jpg",
    tags: ["Publication","2010"],
    doiUrl: "https://doi.org/10.1890/09-0298.1",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1Q3og1LVm2kPRAQCesI9V8bbLFgeSgVAK&usp=drive_fs",
    content: `Density dependence, the phenomenon where population growth slows as populations become crowded, is fundamental to how fish populations are regulated. But studies of reef fishes have produced wildly variable results, sometimes finding strong density dependence and sometimes finding none at all. In this synthesis, we tackled this puzzle.

The key insight from our work is that density dependence isn't a fixed property of a species but emerges from interactions between fish behavior, habitat configuration, and how scientists make their observations. Different experimental designs at different scales can yield completely different conclusions about the same fish populations.

Consider how habitat configuration matters. On isolated coral heads, fish have limited options for where to hide from predators. As density increases, some individuals get pushed to suboptimal positions and suffer higher mortality. But on larger reef systems with more refuges, the same species might show much weaker density dependence because crowded fish can simply move to nearby unoccupied patches.

Predator behavior adds another layer of complexity. If predators focus their hunting on areas of high prey density, this generates strong density-dependent mortality. But if predators are territorial and spread their effort evenly across space, density dependence weakens. We showed how these behavioral mechanisms interact with habitat to produce the variable patterns seen in field studies.

The observational scale problem is particularly important for management. Studies conducted on small patches may detect strong density dependence that disappears when the same population is measured across a whole reef. Conversely, broad-scale studies may miss density-dependent dynamics that operate at local scales. Neither perspective is wrong, but failing to match the scale of observation to the scale of management can lead to poor predictions.

Our synthesis provides a roadmap for designing better studies and making more accurate predictions about how reef fish populations will respond to environmental change. As coral reefs face increasing threats from climate change and habitat loss, understanding what regulates fish populations becomes ever more critical for effective conservation and management.

## Citation

White, J. Wilson; Samhouri, Jameal F.; Stier, Adrian C.; Wormald, Clare L.; Hamilton, Scott L.; Sandin, Stuart A. (2010). Synthesizing mechanisms of density dependence in reef fishes: behavior, habitat configuration, and observational scale. *Ecology*.

[Read the full paper](https://doi.org/10.1890/09-0298.1)`,
  },
  {
    slug: "common-fish-anesthetic-doesn-t-harm-coral-hosts-study-finds",
    title: "Common Fish Anesthetic Doesn't Harm Coral Hosts, Study Finds",
    date: "2009-01-15",
    author: "Boyer et al.",
    excerpt: "Researchers tested whether clove oil, a commonly used fish anesthetic, harms corals when used to collect fish from coral colonies. They found that typical field concentrations caused temporary stress responses but did not affect coral survival or growth over the study period.",
    featuredImage: "/images/coral-polyps-extended-macro.jpg",
    tags: ["Publication","2009","Coral"],
    doiUrl: "https://doi.org/10.1016/j.jembe.2008.10.020",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1QsNItSXvXFKm9B9DNBiDwq02QZPhCbWS&usp=drive_fs",
    content: `When marine biologists need to collect small fish living in coral colonies, they often squirt clove oil into the water. The active ingredient, eugenol, anesthetizes the fish, which float out of the coral branches and can be safely collected. But we wondered: what happens to the coral?

The concern is legitimate. Corals are already stressed by warming oceans, acidification, and pollution. Adding another stressor from research activities could potentially harm the very systems scientists are trying to study and protect. We designed experiments to test whether typical field concentrations of clove oil cause lasting damage to coral colonies.

In both laboratory tanks and field experiments in Moorea, French Polynesia, we exposed Pocillopora corals to clove oil at various concentrations. The corals responded immediately, retracting their polyps and producing excess mucus, clear signs of stress. At higher concentrations, these responses were more severe. But within hours, the corals had recovered, extending their polyps and resuming normal behavior.

The critical question was whether these acute stress responses translated into long-term harm. We monitored coral growth and survival over weeks and found no significant effects from the clove oil exposures. Corals that had been stressed showed the same growth rates and survival as unexposed controls.

These findings provide reassurance for the coral reef research community. Fish-coral interactions are a hot topic in reef ecology, and collecting resident fish without harming their coral hosts is essential for many studies. Our research suggests that clove oil, used responsibly at typical field concentrations, does not appear to cause lasting damage.

We note some caveats. Our study focused on short-term exposures and healthy corals. Corals already stressed by other factors might respond differently. And while survival and growth were unaffected, more subtle effects on coral physiology could exist. Still, for researchers weighing whether to use clove oil in their fieldwork, our study provides valuable evidence that the practice is unlikely to compromise coral health.

## Citation

Boyer, S.E.; White, J.S.; Stier, A.C.; Osenberg, C.W. (2009). Effects of the fish anesthetic, clove oil (eugenol), on coral health and growth. *Journal of Experimental Marine Biology and Ecology*.

[Read the full paper](https://doi.org/10.1016/j.jembe.2008.10.020)`,
  },
  {
    slug: "first-come-first-served-reef-fish-that-arrive-early-dominate",
    title: "First Come, First Served: Reef Fish That Arrive Early Dominate Their Late-Coming Competitors",
    date: "2009-01-15",
    author: "Geange et al.",
    excerpt: "Researchers found that the timing of when young reef fish arrive at a coral reef dramatically affects their chances of survival, with fish that arrive earlier gaining a competitive advantage over later arrivals through increased aggression and territory control.",
    featuredImage: "/images/wrasse-6bar.jpeg",
    tags: ["Publication","2009"],
    doiUrl: "https://doi.org/10.1890/08-0630.1",
    openAccess: false,
    pdfUrl: "https://drive.google.com/open?id=1QbeCX2ga0H5B7Gaug1ikbt4h4vQrUwYu&usp=drive_fs",
    content: `Understanding competition on coral reefs requires looking beyond which species arrive to consider when they arrive. Our research on two wrasse species in French Polynesia reveals how timing of arrival affects competitive outcomes among young reef fish.

We examined whether the timing of arrival affects how young reef fish compete with each other. Most coral reef fish spend their early weeks as tiny larvae drifting in the open ocean before settling onto reefs in unpredictable pulses around new moons. We suspected that differences in arrival time might have consequences for survival. To test this, we created experimental reefs and controlled when recent settlers of two wrasse species - Thalassoma hardwicke and T. quinquevittatum - arrived at the reefs.

Our results showed that both species survived best in the absence of competitors, but when competitors were present, they did best when they arrived at the same time. Survival declined as each species entered the community progressively later than its competitor, and this decline coincided with increased aggression from the earlier-arriving fish. The competitive advantage wasn't species-specific - whichever species arrived first dominated, regardless of identity. Even within the same species, earlier-arriving T. hardwicke individuals had similar competitive advantages over their later-arriving conspecifics.

The strength and consistency of these priority effects across both inter- and intraspecific competition was notable. The mechanism behind how early arrivals gain their advantage remains unclear - whether through better territory establishment or other factors. The duration of these advantages as fish grow also remains to be determined.

These findings suggest that coral reef communities aren't just shaped by which species arrive, but when they arrive. In an era of climate change, when ocean currents and spawning patterns are shifting, changes in the timing of larval delivery could reshape reef communities. Our research provides empirical evidence for 'competitive lotteries' - the idea that chance events like arrival timing can maintain species diversity by preventing any one species from consistently dominating.

Understanding how these priority effects play out in natural systems, where arrival timing is controlled by unpredictable ocean currents, represents an important area for future research. The lasting consequences of timing during those first critical days on the reef could be key to predicting how these communities will change as ocean conditions shift.

## Citation

Geange, Shane W.; Stier, Adrian C. (2009). Order of arrival affects competition in two reef fishes. *Ecology*.

[Read the full paper](https://doi.org/10.1890/08-0630.1)`,
  },
  {
    slug: "coral-s-worst-enemy-also-serves-as-fish-shelter-nature-s-iro",
    title: "Coral's Worst Enemy Also Serves as Fish Shelter—Nature's Irony",
    date: "2009-01-15",
    author: "Stier et al.",
    excerpt: "Small reef fish use crown-of-thorns starfish as habitat, sheltering among their venomous spines despite the starfish's role as a destructive coral predator. This reveals unexpected ecological complexity in interactions with 'pest' species.",
    featuredImage: "/images/red-pencil-urchin-coral-reef.JPG",
    tags: ["Publication","2009","Coral"],
    doiUrl: "https://doi.org/10.1007/s00338-008-0445-9",
    openAccess: true,
    pdfUrl: "https://drive.google.com/open?id=1PCbMyF2sjw6RuSb6BJMsaa_KV-f8YXLu&usp=drive_fs",
    content: `Mark Steele, Andrew Brooks, and I documented reef fish using crown-of-thorns starfish as habitat. While surveying starfish in Moorea, we repeatedly observed small fish sheltering among the venomous spines. The creature famous for destroying coral habitat was serving as habitat itself.

Crown-of-thorns seastars devastate reefs—their outbreaks leave bleached coral skeletons across the Pacific. Yet small juvenile fish were darting in and out of the deadly spines like they'd found a mobile shelter. The irony compounds: as the starfish eats coral and destroys fish habitat, it becomes temporary replacement habitat. The venomous spines that make crown-of-thorns dangerous provide a defensive barrier that tiny fish exploit.

Small juveniles dominated the fish we documented associating with starfish—exactly the size class most vulnerable to predation in open water. They stayed among the spines rather than fleeing across open substrate when approached.

Ecological reality resists tidy narratives of villains and victims. The destroyer also provides services. This matters less for practical management—nobody will cultivate crown-of-thorns as fish habitat—than for understanding that reef ecosystems involve complexity that defies simple stories.

## Citation

Stier, Adrian C.; Steele, Mark A.; Brooks, Andrew J. (2009). Coral reef fishes use crown-of-thorns seastar as habitat. *Coral Reefs*.

[Read the full paper](https://doi.org/10.1007/s00338-008-0445-9)

*This paper is Open Access.*`,
  },
];
