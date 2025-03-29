import { Practice } from '@/services/firebase';

interface JobListingProps {
  practice: Practice;
}

export default function JobListing({ practice }: JobListingProps) {
  // Formatear la fecha de finalización si existe
  const formattedEndDate = practice.end_date 
    ? new Date(practice.end_date).toLocaleDateString('es-ES', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      })
    : null;

  return (
    <div className="mb-6 group">
      <div className="flex items-start mb-2">
        <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 text-indigo-600 group-hover:bg-indigo-200 transition-all">
          •
        </div>
        <h3 className="font-semibold text-gray-800">{practice.company}</h3>
      </div>
      <p className="ml-9 mb-3 text-gray-700">{practice.title}</p>
      
      {/* Información adicional */}
      <div className="ml-9 space-y-2 mb-3">
        {practice.location && (
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <svg className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{practice.location}</span>
          </div>
        )}
        
        {practice.salary && (
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <svg className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{practice.salary}</span>
          </div>
        )}
        
        {formattedEndDate && (
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <svg className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Finaliza: {formattedEndDate}</span>
          </div>
        )}
      </div>
      
      {/* Requisitos (truncados) */}
      {practice.requirements && (
        <div className="ml-9 mb-3 bg-indigo-50 p-3 rounded-lg border border-indigo-100">
          <h4 className="text-sm font-medium text-indigo-700 mb-1">Requisitos</h4>
          <p className="text-sm text-gray-700 line-clamp-3">{practice.requirements}</p>
        </div>
      )}
      
      {/* Link a la oferta */}
      <a 
        href={practice.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="ml-9 bg-gray-100 p-4 rounded-xl border border-gray-200 flex flex-col hover:border-indigo-300 transition-all duration-300 hover:shadow-lg"
      >
        <div className="flex items-center gap-2 mb-1">
          <svg className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          <span className="text-sm text-indigo-600 font-medium">Ver oferta completa</span>
        </div>
        <p className="text-sm text-gray-600 truncate">{practice.url}</p>
      </a>
    </div>
  )
}

