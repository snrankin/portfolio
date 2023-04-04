import { useStaticQuery, graphql } from 'gatsby';

const useResume = () => {
	const { dataJson } = useStaticQuery(graphql`
		query {
			dataJson {
				basics {
					name
					label
					image
					email
					phone
					url
					summary
					profiles {
						network
						url
						username
					}
					location {
						address
						countryCode
					}
				}
				projects {
					endDate(formatString: "yyyy-MM ")
					name
					startDate(formatString: "yyyy-MM")
					summary
					url
				}
				skills {
					name
					level
				}
				work {
					endDate(formatString: "yyyy-MM")
					name
					position
					startDate(formatString: "yyyy-MM")
					summary
					url
				}
			}
		}
	`);

	return dataJson;
};

export default useResume;
