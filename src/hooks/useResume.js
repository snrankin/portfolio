import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
	query Resume {
		basics {
			name
			label
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
		education {
			institution
			area
			studyType
			startDate
			endDate
		}
		languages {
			language
			fluency
		}
		skills {
			name
			level
			keywords
		}
		work {
			name
			position
			url
			startDate
			endDate
			summary
			highlights
		}
	}
`;

const useResume = () => {
	const contentJson = useStaticQuery(query);
	return contentJson;
};

export default useResume;
